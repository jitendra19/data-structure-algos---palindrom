export default function fact(N) {
  let final = 1;
  for (let i = 1; i <= N; i++) final = final * i;
  console.log('fact - ', final);
  return final;
}
fact(5);

export function fact1(N) {
  if (N === 1) {
    return 1;
  } else {
    return N * fact1(N - 1);
  }
}
console.log('fact1 - ', fact1(6));
