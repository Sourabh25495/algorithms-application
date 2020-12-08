const {performance} = require('perf_hooks');

const bubbleSortAscending = (inputArray, lengthOfArray) => {
  let temp;
  const startTime = performance.now()
  for (let i = 0; i < lengthOfArray; i++) {
    for (let j = 0; j < lengthOfArray; j++) {
      if (inputArray[j] > inputArray[j+1]) {
        temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp
      }
    }
  }
  const endTime = performance.now()
  
  return {
    startTime,
    endTime,
    timeTaken: `${endTime - startTime} milliseconds` ,
    sortedArray: inputArray
  }
}

const bubbleSortDescending = (inputArray, lengthOfArray) => {
  let temp;
  const startTime = performance.now()
  for (let i = 0; i < lengthOfArray; i++) {
    for (let j = 0; j < lengthOfArray; j++) {
      if (inputArray[j] < inputArray[j+1]) {
        temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp
      }
    }
  }
  const endTime = performance.now()
  
  return {
    startTime,
    endTime,
    timeTaken: `${endTime - startTime} milliseconds` ,
    sortedArray: inputArray
  }
}

const bubbleSort = (req, res) => {
  const {input: inputArray, sortType} = req.body;
  const lengthOfArray = Array.isArray(inputArray) && inputArray.length
  let sortedResponse;
  
  if(sortType === 'ascending') {
    sortedResponse = bubbleSortAscending(inputArray, lengthOfArray);
  } else if (sortType === 'descending'){
    sortedResponse = bubbleSortDescending(inputArray, lengthOfArray);
  } else {
    res.send({status:400, message: 'Invalid sort type'})
  }
  
  res.send(sortedResponse)
}

module.exports = {
  bubbleSort,
}