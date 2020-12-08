const express = require('express');
const router = express.Router()

const sortingAlgorithms = require('./sorting/Algorithms')

router.use('/sorting/algorithms', sortingAlgorithms);

router.use('/*', (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: 'Endpoint not found'
  })
})

module.exports = router;