const { registerService } = require("../services/auth.services.js")

//AUTHENTICATION API
const register = async (req, res, next) => {
    try {
        const userData = req.body
        const newUser = await registerService(userData)
        res.status(200).json({
            success: true,
            status: "OK",
            message: "User has been Successfully registered",
            user: newUser
        })
    } catch (err) {
        next(err)
    }
}


module.exports = { register }