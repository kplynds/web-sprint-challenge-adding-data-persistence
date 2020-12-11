const express = require('express');

const Projects = require('./model');

const router = express.Router();

const db = require("../../data/dbConfig");

router.get('/', (req, res) => {
    const projects = Projects.find().then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
    if(!req.body.project_completed) {
        req.body.project_completed = false
      }
      Projects.add(req.body).then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({ message: err.message})
      })
})


module.exports = router;