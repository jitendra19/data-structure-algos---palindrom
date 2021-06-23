export default function palin(input) {
  if (typeof input !== 'number') {
    console.error('Not a valid number');
    return;
  }
  const a = parseInt(
    input
      .toString()
      .split('')
      .reverse()
      .join('')
  );
  console.log(`${input} is ${a === input} palin`);
  return a === input;
}
palin(78788787);

export function palin2(input) {
  const length = input.toString().length;
  input = input.toString();
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    // console.log(
    //   `value of first part ${i} value of second part ${length - i - 1}`
    // );
    // console.log(input[i]);
    // console.log(input[length - i]);
    if (input[i] !== input[length - i - 1]) {
      console.log(`${input} not palin`);
      return; // break;
    }
  }
  console.info(`${input} yes palin :-)`);
}
palin2('12356321');
palin2(78788787);
