const express = require("express")
const cors = require("cors")

const db = require("../data/dbConfig")

const projectsRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()
server.use(express.json())
server.use(cors())

server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)

server.get("/", (req, res) => {
  res.status(200).json("You did it!")
})

module.exports = server
