// remove duplicate from sorted array
export default function removeDuplicates(input) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  // const temp = [input[0]];
  // for (let i = 1; i < input.length; i++) {
  //   if (temp[temp.length - 1] !== input[i]) {
  //     temp.push(input[i]);
  //   }
  // }
  // console.log(`removed duplicate array is ${temp}`);
  // return temp;

  let maxIndex = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[maxIndex - 1]) {
      input[maxIndex] = input[i];
      maxIndex++;
    }
  }
  console.log(`removed duplicate array is ${input.splice(0, maxIndex)}`);
}
