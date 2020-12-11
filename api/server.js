const express = require("express")
const cors = require("cors")

const db = require("../data/dbConfig")

const projectsRouter = require('./project/router')

const server = express()
server.use(express.json())
server.use(cors())

server.use("/api/projects", projectsRouter)
// server.use("/api/ingredients", RecipesRouter)

server.get("/", (req, res) => {
  res.status(200).json("You did it!")
})

module.exports = server
