const express = require("express")
const helmet = require("helmet")
const actionRouter = require("../projects/actionRoutes")

const server = express()

server.use(express.json())
server.use(helmet())

server.use("/api/action",actionRouter)

server.get("/",(req,res)=>{
    res.status(200).json("server working")
})

module.exports = server