const map = (arr, callback) => {
  const result = [];
  const index = 0;
  return mapRecursive(arr, callback, index, result);
};

const mapRecursive = (arr, callback, index, result) => {
  if (index === arr.length) {
    return result;
  }

  result.push(callback(arr[index], index, arr));
  return mapRecursive(arr, callback, index + 1, result);
};

export default map;

//Alternative
const array = [1, 2, 3, 4, 5];
const doubledNumbersWithMap = array.map((value) => value * 2);
