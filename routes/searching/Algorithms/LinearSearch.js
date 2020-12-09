const {performance} = require('perf_hooks');

function hasDuplicates(inputArray) {
  return new Set(inputArray).size !== inputArray.length
}


const linearSearchAlgorithm = (inputArray, searchFor, lengthOfArray) => {
  let endTime;
  if (!hasDuplicates(inputArray)) {
    const startTime = performance.now();
    for (let i = 0; i < lengthOfArray; i++) {
      if (inputArray[i] === searchFor)
        endTime = performance.now();
        return {
          startTime,
          endTime,
          timeTaken: `${endTime - startTime} milliseconds`,
          result: `${searchFor} found at index ${i}`
        };
    }
    endTime = performance.now();
    
    return {
      startTime,
      endTime,
      timeTaken: `${endTime - startTime} milliseconds`,
      result: `Couldn't find ${searchFor}`
    }
  }
  return {
    message: "Input should not have duplicates",
  }
}

const linearSearch = (req, res) => {
  const {input: inputArray, searchFor} = req.body;
  const lengthOfArray = Array.isArray(inputArray) && inputArray.length;
  if (Array.isArray(inputArray) && searchFor) {
    const result = linearSearchAlgorithm(inputArray, searchFor, lengthOfArray);
    res.send(result);
  } else {
    res.send("Invalid Input or Search value");
  }
}

module.exports = {
  linearSearch,
}