export default function reverse(input) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  let low = 0;
  let high = input.length - 1;

  while (low < high) {
    const temp = input[high];
    input[high] = input[low];
    input[low] = temp;
    low++;
    high--;
  }
  console.log(`reversed array is ${input}`);
  return input;
}
