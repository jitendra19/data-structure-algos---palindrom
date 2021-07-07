export default function leftRotateArrayByOne(input) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  const a = input[0];
  for (let i = 1; i < input.length; i++) {
    input[i - 1] = input[i];
  }
  input[input.length - 1] = a;

  // input.push(input.shift());
  console.log(input);
}
