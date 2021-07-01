export default function isSorted(input) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  let returnValue = true;
  for (let i = 1; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      returnValue = false;
      break;
      // return returnValue;
    }
  }
  console.log(`array is ${returnValue} sorted`);
  return returnValue;
}
