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
