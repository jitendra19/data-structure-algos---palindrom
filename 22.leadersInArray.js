export default function leadersInArray(input) {
  const size = input.length - 1;
  const leaders = [input[size]];
  for (let i = size - 1; i >= 0; i--) {
    if (!leaders.find(a => a >= input[i])) {
      leaders.push(input[i]);
    }
  }
  console.log(leaders);
}
