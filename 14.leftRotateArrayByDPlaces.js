import leftRotateArrayByOne from './13.leftRotateArrayByOne';

function reverse(input, low, high) {
  // let low = 0, high = input.length-1;
  while (low < high) {
    const a = input[high];
    input[high] = input[low];
    input[low] = a;
    low++;
    high--;
  }
  console.log(input);
  return input;
}

export default function leftRotateArrayByD(input, dPlaces) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  // Method-1
  // const a = input.slice(0, dPlaces); // size of dPlaces
  // for (let i = dPlaces; i < input.length; i++) {
  //   input[i - dPlaces] = input[i];
  // }
  // input = input.concat(a);
  // console.log(input);

  // Method-2
  // while (dPlaces > 0) {
  //   leftRotateArrayByOne(input);
  //   dPlaces--;
  // }
  // console.log('final output - ', input);

  // Method 3
  reverse(input, 0, dPlaces - 1);
  reverse(input, dPlaces, input.length - 1);
  reverse(input, 0, input.length - 1);
  console.log('final output -', input);
}
