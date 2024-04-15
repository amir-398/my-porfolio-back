"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const infoController = require("../controllers/infoController");
const jwtMiddleware = require("../middlewares/JwtMiddleware");
router
    .route("/addInfo")
    .get(jwtMiddleware.verifyToken, infoController.infoRegister);
router.route("/getInfo").get(infoController.getAllInfo);
router.route("/updateInfo/:id").put(infoController.updateInfo);
module.exports = router;
