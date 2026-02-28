const express = require("express");
const { registerConroller, loginController, logoutController } = require("../controller/auth.controller.js");

const router = express.Router()

/**
 * @description Register a new user
 * @route POST /api/auth/register
 * @access Public
 */
router.post("/register", registerConroller)

/**
 * @description Login a user
 * @route POST /api/auth/login
 * @access Public
 */
router.post("/login", loginController)

/**
 * @description Logout a user
 * @route POST /api/auth/logout
 * @access Private
 */
router.post("/logout", logoutController)

module.exports = router;