const express = require('express');
const router = express.Router()

const sortingAlgorithms = require('./sorting/SortingAlgorithms')
const searchingAlgorithm = require('./searching/SearchAlgorithms')

router.use('/sorting/algorithms', sortingAlgorithms);
router.use('/searching/algorithms', searchingAlgorithm);

router.use('/*', (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: 'Endpoint not found'
  })
})

module.exports = router;