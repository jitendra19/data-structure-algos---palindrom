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

palin(123);

palin2(12345);
palin(123321);

palin2(123321);

noOfDigits(12345);

reverse1(123);

fact(5);
console.log('fact1 - 5', fact1(5));

console.log(trailingZerosFactorial(261));

TOH(3, 'A', 'B', 'C');

largest([1, 5, 3, 87, 3, 75, 9, 23, 1097, 979, 3]);
secondLargest([1, 5, 3, 87, 3, 75, 9, 23, 1097, 979, 3]);

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
