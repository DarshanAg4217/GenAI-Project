const express = require("express");
const { registerConroller, loginController, logoutController, getMeController } = require("../controller/auth.controller.js");
const authMiddleware = require('../middleware/auth.middleware.js')

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
router.get("/logout", logoutController)

/**
 * @description Get current user
 * @route GET /api/auth/get-me
 * @access Private
 */


router.get("/get-me", authMiddleware.authUser, getMeController)

module.exports = router;