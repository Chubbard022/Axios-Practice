const express = require("express")
const helmet = require("helmet")
const sourceRouter = require("../projects/actionRoutes")

const server = express()

server.use(express.json())
server.use(helmet())

server.use("/api/source",sourceRouter)

server.get("/",(req,res)=>{
    res.status(200).json("server working")
})

module.exports = server