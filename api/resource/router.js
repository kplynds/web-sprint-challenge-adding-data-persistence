const express = require('express');

const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    const projects = Resources.find().then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
      Resources.add(req.body).then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({ message: err.message})
      })
})


module.exports = router;
