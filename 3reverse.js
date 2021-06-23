export default function reverse1(input) {
  let final = 0;
  while (input > 0) {
    final = final * 10 + (input % 10);
    input = parseInt(input / 10);
  }
  console.log(final);
}
reverse1(1234);
