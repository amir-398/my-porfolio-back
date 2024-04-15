const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const jwtMiddleware = require("../middlewares/JwtMiddleware");
/**
 * @openapi
 * /{lng}:
 *   get:
 *     summary: Get all projects by language
 *     description: Retrieve a list of all projects filtered by the specified language.
 *     tags:
 *       - Projects
 *     parameters:
 *       - in: path
 *         name: lng
 *         required: true
 *         description: Language code to filter projects.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of projects
 *       404:
 *         description: No projects found for the specified language.
 */

/**
 * @openapi
 * /cards/{lng}:
 *   get:
 *     summary: Get project cards by language
 *     description: Retrieve a list of project cards filtered by the specified language.
 *     tags:
 *       - Projects
 *     parameters:
 *       - in: path
 *         name: lng
 *         required: true
 *         description: Language code to filter project cards.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of project cards
 *       404:
 *         description: No project cards found for the specified language.
 */

/**
 * @openapi
 * /addProject:
 *   post:
 *     summary: Add a new project
 *     description: Register a new project to the database.
 *     tags:
 *       - Projects
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'New Project'
 *               description:
 *                 type: string
 *                 example: 'Detailed description of the new project.'
 *     responses:
 *       201:
 *         description: Project added successfully
 *       401:
 *         description: Authorization required
 */

/**
 * @openapi
 * /{id}/{lng}:
 *   get:
 *     summary: Get a project by ID and language
 *     description: Retrieve a specific project by its ID and language.
 *     tags:
 *       - Projects
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the project to retrieve.
 *         schema:
 *           type: string
 *       - in: path
 *         name: lng
 *         required: true
 *         description: Language code of the project.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project data retrieved successfully
 *       404:
 *         description: No project found with the given ID and language.
 */

/**
 * @openapi
 * /{id}:
 *   delete:
 *     summary: Delete a project by ID
 *     description: Removes a project from the database by its ID.
 *     tags:
 *       - Projects
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the project to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project deleted successfully
 *       404:
 *         description: No project found with the given ID.
 */

/**
 * @openapi
 * /{id}:
 *   put:
 *     summary: Update a project by ID
 *     description: Updates project details in the database by its ID.
 *     tags:
 *       - Projects
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the project to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'Updated Project Name'
 *               description:
 *                 type: string
 *                 example: 'Updated description of the project.'
 *     responses:
 *       200:
 *         description: Project updated successfully
 *       404:
 *         description: No project found with the given ID.
 *
 *
 */

router.route("/:lng").get(projectController.getAllProjectsBylng);
router.route("/cards/:lng").get(projectController.getAllProjectsCards);

router
  .route("/addProject")
  .post(jwtMiddleware.verifyToken, projectController.projectRegister);

router.route("/:id/:lng").get(projectController.getProjectByIdAndByLng);

router
  .route("/:id")
  .delete(jwtMiddleware.verifyToken, projectController.deleteProjectById);

router
  .route("/:id")
  .put(jwtMiddleware.verifyToken, projectController.updateProjectById);

module.exports = router;
