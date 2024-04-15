"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
/**
 * @openapi
 * /register:
 *   post:
 *     summary: Enregistre un nouvel utilisateur
 *     description: Crée un nouveau compte utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               identifiant:
 *                 type: string
 *                 default: "amir.4000@hotmail.fr"
 *               password:
 *                 type: string
 *                 default: "12345A@"
 *
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Erreur de requête
 *     tags:
 *      - Users
 */
router.route("/register").post(adminController.adminRegister);
/**
 * @openapi
 * /login:
 *   post:
 *     summary: Admin login
 *     description: Authenticates an admin and returns a token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               identifiant:
 *                 type: string
 *                 description: Admin's username
 *                 default : "amir.4000@hotmail.fr"
 *               password:
 *                 type: string
 *                 description: Admin's password
 *                 default : "12345A@"
 *     responses:
 *       200:
 *         description: Login successful, token returned
 *       401:
 *         description: Unauthorized, invalid username or password
 *     tags:
 *      - Users
 */
router.route("/login").post(adminController.adminLogin);
/**
 * @openapi
 * /api/admin/verifyToken:
 *   get:
 *     summary: Verify token
 *     description: Checks if the provided token is valid.
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: Bearer Token required to authorize
 *     responses:
 *       200:
 *         description: Token is valid
 *       401:
 *         description: Token is invalid or expired
 *     tags:
 *      - Users
 */
router.route("/verifyToken").get(adminController.verifyToken);
module.exports = router;
