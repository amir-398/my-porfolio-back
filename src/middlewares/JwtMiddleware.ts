import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

interface DecodedToken {
  userId: string;
  [key: string]: any;
}
declare module "express-serve-static-core" {
  interface Request {
    user?: DecodedToken;
  }
}
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(403).json({ message: "Accès interdit: token manquant" });
      return;
    }

    const payload = await new Promise<DecodedToken>((resolve, reject) => {
      jwt.verify(token, process.env.JWT_KEY || "", (error, decoded) => {
        if (error) {
          reject(error);
        } else {
          resolve(decoded as DecodedToken);
        }
      });
    });

    req.user = payload; // Stockage des informations du token décodé dans la requête
    next();
  } catch (error) {
    console.error(error);
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(403).json({ message: "Accès interdit: token invalide" });
    } else {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  }
};
