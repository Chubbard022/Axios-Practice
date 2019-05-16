const express = require("express")
const helmet = require("helmet")
const projectRouter = require("../projects/projectRoutes")
const actions = require("../projects/actionRoutes")

const server = express()

server.use(express.json())
server.use(helmet())

server.use("/api/projects",projectRouter)
server.use("/api/actions",actionRouter)

module.exports = server