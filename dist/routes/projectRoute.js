"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const jwtMiddleware = require("../middlewares/JwtMiddleware");
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
