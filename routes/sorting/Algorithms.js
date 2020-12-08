const express = require('express');
const router = express.Router();
const {bubbleSort} = require('./Algorithms/BubbleSort');

router.post('/bubble-sort', (req, res) => {
  bubbleSort(req, res);
});





module.exports = router;
