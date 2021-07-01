export default function secondLargest(input) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  let largestNumber = input[0];
  let secondLargestNumber = -1;
  for (let i = 1; i < input.length; i++) {
    if (largestNumber < input[i]) {
      secondLargestNumber = largestNumber;
      largestNumber = input[i];
    } else if (largestNumber > input[i] && secondLargestNumber < input[i]) {
      secondLargestNumber = input[i];
    }
  }
  console.log(`second largest Number is ${secondLargestNumber}`);
  return `second largest Number is ${secondLargestNumber}`;
}
