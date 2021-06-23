export default function noOfDigits(N) {
  let count = 0;
  if (N === 0) {
    return count;
  }
  while (N > 1) {
    count++;
    N = N / 10;
    // console.log(N);
  }
  console.log(count);
  return count;
}
noOfDigits(12345);
