const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const jwtMiddleware = require("../middlewares/JwtMiddleware");
router
  .route("/")
  .get(jwtMiddleware.verifyToken, projectController.getAllProjects);
router
  .route("/addProject")
  .post(jwtMiddleware.verifyToken, projectController.projectRegister);
router
  .route("/:id")
  .get(jwtMiddleware.verifyToken, projectController.getProjectById);
router
  .route("/:id")
  .delete(jwtMiddleware.verifyToken, projectController.deleteProjectById);
router
  .route("/:id")
  .put(jwtMiddleware.verifyToken, projectController.updateProjectById);

module.exports = router;
