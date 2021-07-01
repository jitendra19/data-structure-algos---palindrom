// remove duplicate from sorted array
export default function moveZerosToEnd(input) {
  if (input && Array.isArray(input) && input.length === 0) {
    console.log('No element in Array');
    return 'No element in Array';
  }
  // let maxIndex = 0;
  // let zeroCount = 0;
  // for (let i = 0; i < input.length; i++) {
  //   if (input[i] === 0) {
  //     zeroCount++;
  //   } else {
  //     input[maxIndex] = input[i];
  //     maxIndex++;
  //   }
  // }
  // input.fill(0, maxIndex, input.length - 1);
  // console.log(`same array after move Zeros to end is ${input}`);

  let maxIndex = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 0) {
      input[maxIndex] = input[i];
      input[i] = 0;
      maxIndex++;
    }
  }
  console.log(`same array after move Zeros to end is ${input}`);
}
