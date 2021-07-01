export default function largest(input) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  let largestNumber = input[0];
  for (let i = 1; i < input.length; i++) {
    if (largestNumber < input[i]) {
      largestNumber = input[i];
    }
  }
  console.log(`largest Number is ${largestNumber}`);
  return `largest Number is ${largestNumber}`;
}
