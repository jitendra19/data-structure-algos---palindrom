export default function frequencyinSortedArray(input) {
  const dict = {};
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (dict[input[i]]) {
      count++;
      dict[input[i]] = count;
    } else {
      count = 1;
      dict[input[i]] = count;
    }
  }
  for (let i in dict) {
    console.log(i, ' : ', dict[i]);
  }
}

export function maximumDifference(input) {
  let ret = input[1] - input[0];
  let minValue = input[0];
  for (let j = 1; j < input.length; j++) {
    // ret = max(ret , input[j] - minValue );
    ret = ret > input[j] - minValue ? ret : input[j] - minValue;
    // minValue = min(minValue, arr[j])
    minValue = minValue < input[j] ? minValue : input[j];
  }
  console.log('maximum difference',ret);
  // return ret;
}
