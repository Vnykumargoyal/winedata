// Utility function to calculate mean of an array
const calculateMean = (arr) => {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};

// Utility function to calculate median of an array
const calculateMedian = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  } else {
    return sortedArr[middle];
  }
};

// Utility function to calculate mode of an array
const calculateMode = (arr) => {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mode;

  arr.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mode = num;
    }
  });

  return mode;
};

export {
  calculateMean,
  calculateMedian,
  calculateMode,
};
