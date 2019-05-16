const express = require("express")
const helmet = require("helmet")
const projectRouter = require("")
const actions = require("")

const server = express()

server.use(express.json())
server.use(helmet())

server.use("/api/projects",projectRouter)
server.use("/api/actions",actionRouter)

module.exports = server