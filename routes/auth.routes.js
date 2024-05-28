const express = require("express")
const { register } = require("../controllers/auth.controller.js")
const router = express.Router()

//AUTHENTICATION API
router.post("/register", register)


module.exports = router