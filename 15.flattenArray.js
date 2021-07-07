export default function flattenArray(input) {
  // Method 1 reduce.
  // return input.reduce((acc, obj) => {
  //   if (Array.isArray(obj)) {
  //     return acc.concat(flattenArray(obj));
  //   } else {
  //     acc.push(obj);
  //     return acc;
  //   }
  // }, []);

  // Method 2 recursion
  // let temp = [];
  // for (let i = 0; i < input.length; i++) {
  //   if (Array.isArray(input[i])) {
  //     temp = temp.concat(flattenArray(input[i]));
  //   } else {
  //     temp.push(input[i]);
  //   }
  // }
  // return temp;

  // Method 3
  return input.flat(4);
}
