import leftRotateArrayByOne from './13.leftRotateArrayByOne';

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
  while(dPlaces > 0) {
    leftRotateArrayByOne(input);
    dPlaces--;
  }
  
}
