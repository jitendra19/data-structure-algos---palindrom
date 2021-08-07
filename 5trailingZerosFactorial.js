export default function trailingZerosFactorial(N) {
  //count of 5 and count of 0
  let noOfZeros = 0;

  for (let i = 5; i <= N; i *= 5) {
    noOfZeros = noOfZeros + Math.floor(N / i);
  }
  return noOfZeros;
}
trailingZerosFactorial(11);

// complexity  -> log n - base 5
