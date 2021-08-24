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
  // console.log(count);
  return count;
}

noOfDigits(12345);

// TEST CASES

let count = 0;
let pass = 0;
let fail = 0;

const test = (desc, callback) => () => {
  count++;
  callback(desc) ? pass++ : fail++;
};

function priintTheResult() {
  console.log('no of total test cases - ', count);
  console.log('no of test cases pass - ', pass);
  console.log('no of test cases failed - ', fail);
}

test('testing noOfDigits method when expected is 4', desc => {
  const actual = noOfDigits(12345);
  const expected = 4;
  if (actual === expected) {
    console.log(desc, ' - passed');
    return true;
  } else {
    console.log(desc, ' - failed');
    return false;
  }
})();

test('testing noOfDigits method when expected is 5', desc => {
  const actual = noOfDigits(12345);
  const expected = 5;
  if (actual === expected) {
    console.log(desc, ' - passed');
    return true;
  } else {
    console.log(desc, ' - failed');
    return false;
  }
})();

priintTheResult();
