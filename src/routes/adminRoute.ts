const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.route("/register").post(adminController.adminRegister);
router.route("/login").post(adminController.adminLogin);

module.exports = router;
