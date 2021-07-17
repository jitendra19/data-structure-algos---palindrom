export default function frequencyinSortedArray(input) {
  const dict = {};
  let count = 0;
  for (let i = 0; i < input.length - 1; i++) {
    if (dict.isPropertyOf(i) && dict[i]) {
      dict[i] = count++;
    } else {
      dict[i] = 1;
      count = 0;
    }
  }
  for (let i in dict) {
    console.log(dict[i]);
  }
}
