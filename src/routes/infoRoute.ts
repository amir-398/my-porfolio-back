const express = require("express");
const router = express.Router();
const infoController = require("../controllers/infoController");
const jwtMiddleware = require("../middlewares/JwtMiddleware");
/**
 * @openapi
 * /infos/addInfo:
 *   post:
 *     summary: Register info
 *     description: This endpoint is for adding information, requiring authentication.
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - value
 *             properties:
 *               title:
 *                 type: string
 *                 example: 'email'
 *               value:
 *                 type: string
 *                 example: 'amir.4000@hotmail.fr'
 *     responses:
 *       200:
 *         description: Information added successfully.
 *       401:
 *         description: Authentication error due to invalid or missing JWT.
 *     tags:
 *       - User Info
 */
router
  .route("/addInfo")
  .post(jwtMiddleware.verifyToken, infoController.infoRegister);

/**
 * @openapi
 * /infos/getInfo:
 *   get:
 *     summary: Get all information
 *     description: Retrieves all stored information from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved all information.
 *     tags:
 *      - User Info
 */
router.get("/getInfo", infoController.getAllInfo);

/**
 * @openapi
 * /updateInfo/{id}:
 *   put:
 *     summary: Update information
 *     description: Updates a specific piece of information.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the information to update.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Information updated successfully.
 *       404:
 *         description: Information not found.
 *     tags:
 *      - User info
 */
router.put("/updateInfo/:id", infoController.updateInfo);
module.exports = router;
