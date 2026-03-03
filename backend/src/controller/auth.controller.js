const userModel = require("../model/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListModel = require("../model/blackList.model.js");


/** 
 * @description Register a new user
 * @route POST /api/auth/register
 * @access Public
*/
const registerConroller = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const userExists = await userModel.findOne({ email })

        if (userExists) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            username,
            email,
            password: hashedPassword
        })


        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

        res.cookie("token", token, { httpOnly: true })


        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
            token: token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

/** 
 * @description Login a user
 * @route POST /api/auth/login
 * @access Public
*/

const loginController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email & Password Required"
        })
    }

    try {
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(401).json({
                message: "Invalid Email or Password"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid Email or Password"
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);

        res.cookie("token", token, { httpOnly: true })

        return res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
            token: token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        })
    }


}

/** 
 * @description Logout a user
 * @route POST /api/auth/logout
 * @access Private
*/
const logoutController = async (req, res) => {

    const token = req.cookies.token || req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "No token provided"
        })
    }

    try {
        const blackList = await blackListModel.create({
            token: token
        })

        res.clearCookie("token")

        return res.status(200).json({
            message: "User logged out successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        })
    }

}

const getMeController = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id)
        return res.status(200).json({
            message: "User fetched successfully",
            user: user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = { registerConroller, loginController, logoutController, getMeController }