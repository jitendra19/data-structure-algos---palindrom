const input = [
  'may',
  'student',
  'students',
  'dog',
  'studentssess',
  'god',
  'cat',
  'act',
  'tab',
  'bat',
  'flow',
  'wolf',
  'lambs',
  'amy',
  'yam',
  'balms',
  'looped',
  'poodle'
];

export default function groupingSimilarWords() {
  const dict = {};
  for (let i = 0; i < input.length; i++) {
    const key = input[i]
      .split('')
      .sort()
      .join('');
    if (dict[key]) {
      dict[key].push(input[i]);
    } else {
      dict[key] = [].concat(input[i]);
    }
  }
  for (let i in dict) {
    console.log(dict[i]);
  }
}
