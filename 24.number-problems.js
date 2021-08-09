export default function numberProblems() {
  // AllDivisors(12);
  AllDivisorsInOrder(12);
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

function AllDivisorsInOrder(num) {
  let i;
  for (i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
  i--;
  for (; i > 0; i--) {
    if (i !== parseInt(num / i) && num % parseInt(num / i) === 0) {
      console.log(parseInt(num / i));
    }
  }
}