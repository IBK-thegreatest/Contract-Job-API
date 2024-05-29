const express = require("express")
const authRoute = require("./routes/auth.routes.js")
const app = express()

//DISPLAY THIS ON THE ROOT FOLDER
app.get("/", (req, res) => {
    res.send("Welcome to the Authentication API")
})

//INITIALIZING MIDDLEWARES
app.use(express.json())
app.use("/api/v1/auth", authRoute)
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went Wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}`);
})