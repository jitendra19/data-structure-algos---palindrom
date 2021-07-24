// Import stylesheets
import './style.css';

import palin, { palin2 } from './1palindrom';
import noOfDigits from './2noofDigits';
import reverse1 from './3reverse';
import fact, { fact1 } from './4factorial';
import trailingZerosFactorial from './5trailingZerosFactorial';
import TOH from './6TOH';

import largest from './7GetlargestnumberfromArray';
import secondLargest from './8GetSecondlargestnumberfromArray';
import isSorted from './9CheckifArrayisSortedOrNot';
import reverse from './10.reverseOfAnArray';
import removeDuplicates from './11.removeDuplicatesFromArray';
import moveZerosToEnd from './12.moveZerosToEndInArray';
import leftRotateArrayByOne from './13.leftRotateArrayByOne';
import leftRotateArrayByD from './14.leftRotateArrayByDPlaces';
import flattenArray from './15.flattenArray';
import powerSet from './16.powerSetOfString';
import groupingSimilarWords from './17.groupingSimilarWords';
import runBeautification from './18.beautifyObject';
import maximizeprofiteOfStocks from './21.maximizeprofiteOfStocks';
import leadersInArray from './22.leadersInArray';
import frequencyinSortedArray, {
  maximumDifference,
  trappingRainWater,
  trappingRainWater1,
  maximumConsecutinveOnes,
  maximumConsecutinveSum,
  maximumConsecutinveSum1,
  maximumLengthEvenOddOrder
} from './23.arrayProblems';

// palin(123);
// palin2(12345);
// palin(123321);
// palin2(123321);
// noOfDigits(12345);
// reverse1(123);
// fact(5);
// console.log('fact1 - 5', fact1(5));
// console.log(trailingZerosFactorial(261));
// TOH(3, 'A', 'B', 'C');
// largest([1, 5, 3, 87, 3, 75, 9, 23, 1097, 979, 3]);
// secondLargest([1, 5, 3, 87, 3, 75, 9, 23, 1097, 979, 3]);
// isSorted([1, 2, 3, 4, 5]);
// isSorted([1, 2, 3, 4, 5, 1]);
// isSorted([1, 2, 2, 3, 4, 5, 5]);
// isSorted([5, 1, 2, 2, 3, 4, 5, 5]);
// reverse([1, 2, 2, 3, 4, 5, 5]);
// reverse([1, 5, 3, 87, 3, 75, 9, 23, 1097, 979, 3]);
// removeDuplicates([1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5, 5]);
// moveZerosToEnd([0, 1, 2, 0, 5, 0, 8, 0]);
// leftRotateArrayByOne([12, 0, 1, 2, 0, 5, 0, 8, 0]);
// leftRotateArrayByD([12, 0, 1, 2, 0, 5, 0, 8, 0], 3);
// console.log(flattenArray([1, 2, 3, [4, [6, 7, [5, [8, 9]]]]]));
// console.log(flattenArray([1, 2, 3, [4], 6, 7, 8]));
// console.log(powerSet('abc'));
// groupingSimilarWords();
runBeautification();
// maximizeprofiteOfStocks([1, 5, 3, 8, 12]);
// leadersInArray([9, 5, 3, 8, 4]);
// frequencyinSortedArray([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5]);
// maximumDifference([2, 3, 10, 6, 4, 8, 1]);
// trappingRainWater([2, 3, 10, 6, 4, 8, 1]);
// trappingRainWater1([2, 0, 3, 1, 5, 0, 3, 0, 4, 0, 3]);
// maximumConsecutinveOnes();
// maximumConsecutinveSum();
// maximumConsecutinveSum1();
maximumLengthEvenOddOrder();
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
