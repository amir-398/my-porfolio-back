"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
/**
 * @openapi
 * /api/admin/register:
 *   post:
 *     summary: Register a new admin
 *     description: Registers a new admin with username and password.
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
 *               username:
 *                 type: string
 *                 description: Admin's username
 *               password:
 *                 type: string
 *                 description: Admin's password
 *     responses:
 *       200:
 *         description: Admin registered successfully
 *       400:
 *         description: Error in registration
 */
router.route("/register").post(adminController.adminRegister);
/**
 * @openapi
 * /api/admin/login:
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
 *               username:
 *                 type: string
 *                 description: Admin's username
 *               password:
 *                 type: string
 *                 description: Admin's password
 *     responses:
 *       200:
 *         description: Login successful, token returned
 *       401:
 *         description: Unauthorized, invalid username or password
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
 */
router.route("/verifyToken").get(adminController.verifyToken);
module.exports = router;
