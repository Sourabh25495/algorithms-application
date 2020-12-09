const express = require('express');
const router = express.Router();
const {linearSearch} = require('./Algorithms/LinearSearch');

router.use('/linear-search', (req, res) => {
  linearSearch(req, res);
});


module.exports = router;
