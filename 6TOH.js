// Tower of hanoi

export default function TOH(n, A, B, C) {
  if(n ===1 ) {
      console.log(`move ${n} from ${A} -> ${C}`); return;
  }

  TOH(n-1, A, C, B);
  console.log(`move ${n} from ${A} -> ${C}`)
  TOH(n-1, B, A, C)
}
TOH(3, 'A', 'B', 'C')