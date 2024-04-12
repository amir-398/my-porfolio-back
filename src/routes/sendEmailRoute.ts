const sendEmail = require("../email/sendEmailController");
const express = require("express");
const router = express.Router();

router.post("/", sendEmail.test);

module.exports = router;
