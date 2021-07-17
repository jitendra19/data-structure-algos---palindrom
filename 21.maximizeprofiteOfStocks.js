export default function maximizeprofiteOfStocks(input) {
  let profit = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      profit += input[i] - input[i - 1];
    }
  }
  console.log(profit);
}
