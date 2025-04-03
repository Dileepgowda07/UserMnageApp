const express = require('express')
const dotenv = require("dotenv")
const userRoutes = require("../UserMnageApp/routes/userRoutes.js")
const connectDB = require("../UserMnageApp/config/database.js")
dotenv.config();
const app= express()
const PORT = process.env.PORT||3000;
connectDB()
//const Host = dotenv.env.Host
app.use(express.json())
app.use(`/api/users`,userRoutes)

app.listen(PORT,()=>{
 console.log(`Running on http://localhost:${PORT}`);
})