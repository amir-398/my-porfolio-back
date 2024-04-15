"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEmail = require("../email/sendEmailController");
const express = require("express");
const router = express.Router();
router.post("/", sendEmail.test);
module.exports = router;
