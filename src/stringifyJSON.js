// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
var result = [];
  //check for arrays
  if(Array.isArray(obj)){
    for(var i=0;i<obj.length;i++){
      if(obj[i]===undefined && typeof obj[i] === 'function'){
        result.push(stringifyJSON(null));
      } else {
        result.push(stringifyJSON(obj[i]));
      }
    }
    return '[' + result.join(',') + ']';
  }
  //check for objects
  if(obj && typeof obj === 'object'){
    for(var key in obj){
      if(obj[key]!==undefined && typeof obj[key] !== 'function'){
        result.push(stringifyJSON(key)+":"+stringifyJSON(obj[key]));
      }
    }
    return '{' + result.join(',') + '}';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } 
//stringify primitives
 return  '' + obj + '';
};


/*
- Number 
- String 
- Boolean 
- Array 
- Object 
- Function 
- Regular Expression 
- Null 
- Undefined 
*/
