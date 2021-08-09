export default function numberProblems() {
  console.log('number problems');
  AllDivisors(12);
}

function primeFactor() {}

function AllDivisors(num) {
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
    if (i !== parseInt(num / i) && num % parseInt(num / i) === 0) {
      console.log(parseInt(num / i));
    }
  }
}
