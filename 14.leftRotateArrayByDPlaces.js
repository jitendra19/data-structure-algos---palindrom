export default function leftRotateArrayByD(input, dPlaces) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  const a = input.slice(0, dPlaces); // size of dPlaces

  for (let i = dPlaces; i < input.length; i++) {
    input[i - dPlaces] = input[i];
  }
  input = input.concat(a);
  // input.push(input.shift());
  console.log('abc');

  console.log(input);
}
