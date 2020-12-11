const express = require('express');

const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    const projects = Tasks.find().then(data => {
        const formattedData = data.map(item => {
            item.completed = item.completed === 0 ? false : true
            return item
          })
          res.status(200).json(formattedData)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
      Tasks.add(req.body).then(data => {
        data.completed = data.completed === 0 ? false : true
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({ message: err.message})
      })
})


module.exports = router;
