export default function numberProblems() {
  // AllDivisors(12);
  // AllDivisorsInOrder(12);
  // console.log(isPrime(13));
  // console.log(isPrime(51));
  // console.log(isPrime(251));
  // console.log(isPrime(25));
  // primeFactors(112);
  primeFactors(251);
  // primeFactors(127);
}

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

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function primeFactors(num) {
  let manipulatedNum = num;
  for (let i = 2; i * i <= manipulatedNum; i++) {
    while (manipulatedNum % i === 0) {
      console.log(i);
      manipulatedNum = parseInt(manipulatedNum / i);
    }
  }
  if (manipulatedNum > 1) console.log(manipulatedNum);
}
