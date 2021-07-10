// Pretty printing JSON data - Jitendra
Input :-
{
  "dd91eab6": {
      "comment": [
        "Some comment",
        "abc",
        {
          
        }
      ], 
      "Date": "Fri Aug 30 05:20:11 2019 +0000", 
      "svnrev": "358294", 
      "Author": "Prabal"
    },
  }

Output:-

  "dd91eab6":
    "comment":
        "Some comment",
        "abc"
    "Date":
      "Fri Aug 30 05:20:11 2019 +0000", 
    "svnrev":
      "358294", 
    "Author":
      "Prabal"
  
function beautify(obj, level: 0) {
    // let ret = {}
    for(let i in obj) {
      console.log(i, ':', level);
      if(typeOf(obj[i]) === 'object') {
        beautify(obj[i], level++);
      } else if (Array.isArray(obj[i])) {      	
        console.log(obj[i].map(a=> {
                      if(typeOf(a) === 'object') {
                        beautify(a, level++);
                      } else {
                        return a;
                      }
                    }), level++);
      } else {
        console.log('/n');
        consoel.log(obj[i], level++);
      }
    }
}
  
// Return the content as string, printing the string should resemble the output above
function beautifyWithPrintString(obj, level: 0) {
      let ret = ``;
      for(let i in obj) {
        ret = `${i}:'/n'`;
        if(typeOf(obj[i]) === 'object') {
          ret = ret + beautify(obj[i], level++);
        } else if (Array.isArray(obj[i])) {      	
          const arr = obj[i].map(a=> {
                        if(typeOf(a) === 'object') {
                          return beautify(a, level++);
                        } else {
                          return a;
                        }
                      }).join('/n');
          ret = ret + arr;
        } else {
          ret = ret + obj[i]
        }
      }
      return ret;
  }