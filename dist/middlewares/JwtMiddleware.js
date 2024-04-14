"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            res.status(403).json({ message: "Accès interdit: token manquant" });
            return;
        }
        const payload = await new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, process.env.JWT_KEY || "", (error, decoded) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(decoded);
                }
            });
        });
        req.user = payload; // Stockage des informations du token décodé dans la requête
        next();
    }
    catch (error) {
        console.error(error);
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            res.status(403).json({ message: "Accès interdit: token invalide" });
        }
        else {
            res.status(500).json({ message: "Erreur interne du serveur" });
        }
    }
};
exports.verifyToken = verifyToken;
