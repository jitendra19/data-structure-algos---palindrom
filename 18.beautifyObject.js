// Pretty printing JSON data - Jitendra
// Input :-
// {
//   "dd91eab6": {
//       "comment": [
//         "Some comment",
//         "abc",
//         {

//         }
//       ],
//       "Date": "Fri Aug 30 05:20:11 2019 +0000",
//       "svnrev": "358294",
//       "Author": "Prabal"
//     },
//   }

// Output:-

//   "dd91eab6":
//     "comment":
//         "Some comment",
//         "abc"
//     "Date":
//       "Fri Aug 30 05:20:11 2019 +0000",
//     "svnrev":
//       "358294",
//     "Author":
//       "Prabal"

// function beautify(obj, level: 0) {
//     // let ret = {}
//     for(let i in obj) {
//       console.log(i, ':', level);
//       if(typeOf(obj[i]) === 'object') {
//         beautify(obj[i], level++);
//       } else if (Array.isArray(obj[i])) {
//         console.log(obj[i].map(a=> {
//                       if(typeOf(a) === 'object') {
//                         beautify(a, level++);
//                       } else {
//                         return a;
//                       }
//                     }), level++);
//       } else {
//         console.log('/n');
//         consoel.log(obj[i], level++);
//       }
//     }
// }

// // Return the content as string, printing the string should resemble the output above
// function beautifyWithPrintString(obj, level: 0) {
//       let ret = ``;
//       for(let i in obj) {
//         ret = `${i}:'/n'`;
//         if(typeOf(obj[i]) === 'object') {
//           ret = ret + beautify(obj[i], level++);
//         } else if (Array.isArray(obj[i])) {
//           const arr = obj[i].map(a=> {
//                         if(typeOf(a) === 'object') {
//                           return beautify(a, level++);
//                         } else {
//                           return a;
//                         }
//                       }).join('/n');
//           ret = ret + arr;
//         } else {
//           ret = ret + obj[i]
//         }
//       }
//       return ret;
//   }

function beautify(obj, level) {
  let tabingSpace = '\t';
  /* console.log(level) */
  let num = level;
  while (num > 0) {
    tabingSpace = tabingSpace + '\t';
    num--;
  }
  console.log(tabingSpace);
  let str = '';
  for (let i in obj) {
    /* str = str + i + ': \n \t ' + obj[i] */

    if (Array.isArray(obj[i])) {
      str = str + '\n' + i;
      obj[i].map(a => {
        str = str + '\n' + tabingSpace + a;
      });
      // recusion for internal items like array and object
    } else if (typeof obj[i] === 'object' && !!obj[i]) {
      str = str + '\n' + i + '\n' + tabingSpace + beautify(obj[i], ++level);
    } else {
      str = `${str}\n${level >= 1 ? tabingSpace : ''}${i}: \n ${tabingSpace} ${
        obj[i]
      }`;
    }
  }
  return str;
}

export default function runBeautification() {
  /* const str = beautify({a:{b:{c:[1,2,3,4,5], d: 'abc'}}}) */
  /* var data = "Heading (info:info) \n info: \n \t and so on "; */

  const obj = {
    a: '12345',
    d: {
      a: '12345'
    },
    c: [1, 2]
  };
  const str = beautify(obj, 0);
  /* console.log(str) */

  const h6 = document.createElement('h6');
  h6.textContent = str;
  document.getElementById('maindiv').append(h6);

  /* anotherStr = JSON.stringify(obj, null, 8) */

  /* const h61 = document.createElement('h6');  
  h61.textContent = anotherStr;
  document.getElementById('maindiv').append(h61); */
}
