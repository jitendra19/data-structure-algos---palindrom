export default function frequencyinSortedArray(input) {
  const dict = {};
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (dict[input[i]]) {
      count++;
      dict[input[i]] = count;
    } else {
      count = 1;
      dict[input[i]] = count;
    }
  }
  for (let i in dict) {
    console.log(i, ' : ', dict[i]);
  }
}
// 24
export function maximumDifference(input) {
  let ret = input[1] - input[0];
  let minValue = input[0];
  for (let j = 1; j < input.length; j++) {
    // ret = max(ret , input[j] - minValue );
    ret = ret > input[j] - minValue ? ret : input[j] - minValue;
    // minValue = min(minValue, arr[j])
    minValue = minValue < input[j] ? minValue : input[j];
  }
  console.log('maximum difference', ret);
  // return ret;
}
// 25
export function trappingRainWater(input) {  
  const size = input.length;
  // let leftMax = input[1],
    // right = size-1,
  let water = 0;
  for(let i=1;i<size;i++) {
    let leftMax = input[i],
    for(let j = 0;j<i;j++) {
      leftMax = leftMax > input[j] ? leftMax : input[j]
    }
    let rightMax = input[i],
    for(let j=i+1;j<size;j++) {
      rightMax = rightMax > input[j] ? rightMax : input[j];
    }
    const min = rightMax > leftMax ? leftMax : rightMax;
    water = water + min-input[i];
  }
  console.log(water);
}
// 26 efficientMethod
export function trappingRainWater1(input) {  
  const size = input.length;
  let water = 0;
  let leftMax = [input[0]];
  let rightMax = [];
  rightMax[size-1] = input[size-1];

  for(let i = 0; i<size;i++) {
    leftMax[i] = leftMax[i-1] > input[i] ? leftMax[i-1] : input[i]
  }
  for(let i = size-2; i>0; i--) {
    rightMax[i] = rightMax[i+1] > input[i] ? rightMax[i+1] : input[i];
  }
  for(let i=1;i<size;i++) {    
    const min = rightMax[i] > leftMax[i] ? leftMax[i] : rightMax[i];
    water = water + min - input[i];
  }
  console.log(water);
}

// 27 maximum consecutive 1's in a Array
export function maximumConsecutinveOnes(input) {
  input = [1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1];
  let maxSize = 0;
  // consecutive = false;
  let size = 0;
  for(let i = 0; i< input.length ;i++) {
    if(input[i] === 1){      
        size++;
    } else {
      size = 0;
    }    
    if(maxSize < size) {
      maxSize =  size;
    }
  }
  console.log(maxSize);
}

// 27 maximum subArray sum in consecutive order
export function maximumConsecutinveSum(input) {
  input = [2,3,-8,7,-1,2,3];
  let maxSum = input[0];  
  
  for(let i = 0; i< input.length ;i++) {
    let current = 0;
    for(let j=i;j<input.length;j++) {
      current = current + input[j];
      if(current > maxSum) {
        maxSum =  current;
      }
    }    
  }
  console.log(maxSum);
}