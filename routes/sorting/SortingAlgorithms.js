const express = require('express');
const router = express.Router();
const {bubbleSort, selectionSort} = require('./Algorithms/BubbleSort');

router.use('/bubble-sort', (req, res) => {
  bubbleSort(req, res);
});

router.use('/selection-sort', (req, res) => {
  bubbleSort(req, res);
});

module.exports = router;
