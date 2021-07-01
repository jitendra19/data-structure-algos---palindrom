export default function largest(input) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  let largestNumber = 0;
  for (let i = 0; i < input.length; i++) {
    if (largestNumber < input[i]) {
      largestNumber = input[i];
    }
  }
  console.log(`largest Number is ${largestNumber}`);
  return `largest Number is ${largestNumber}`;
}
