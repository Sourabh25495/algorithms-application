

const insertionSortAscending = (inputArray, lengthOfArray) => {
  for(let i = 1; i < lengthOfArray; i++) {
    let currentElement = inputArray[i];
    let j = i-1;
    while((j > -1) && (currentElement < inputArray[j])) {
      inputArray[j+1] = inputArray[j];
      j--;
    }
    inputArray[j+1] = currentElement;
  }
  return inputArray;
}

const insertionSortDescending = (inputArray, lengthOfArray) => {
  for(let i = 1; i < lengthOfArray; i++) {
    let currentElement = inputArray[i];
    let j = i-1;
    while((j > -1) && (currentElement > inputArray[j])) {
      inputArray[j+1] = inputArray[j];
      j--;
    }
    inputArray[j+1] = currentElement;
  }
  return inputArray;
}


const selectionSort = (req, res) => {
  const {input: inputArray, sortType} = req.body;
  const lengthOfArray = Array.isArray(inputArray) && inputArray.length
  let sortedResponse;
  
  if(sortType === 'ascending') {
    sortedResponse = insertionSortAscending(inputArray, lengthOfArray);
  } else if (sortType === 'descending'){
    sortedResponse = insertionSortDescending(inputArray, lengthOfArray);
  } else {
    res.send({status:400, message: 'Invalid sort type'})
  }
  
  res.send(sortedResponse)
}


module.exports = {
  selectionSort,
}