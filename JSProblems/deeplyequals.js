deepEquals = function(a, b){
  var deeplyEquals = true;

  var recurse = function(a, b) {

    //base case - a or b do not equal objects
    if(typeof(a) !== 'object' || typeof(b) !== 'object') {
      if(a !== b) {
        deeplyEquals = false;
      }
    }

    //different recurisve cases depending on whether an array or object
    if(Array.isArray(a) && Array.isArray(b)) {
      for(var i = 0; i < a.length; i++) {
        recurse(a[i], b[i]);
      }


    } else if (typeof(a) === 'object' && typeof(b) === 'object') {
      for(let item in a) {
        if (!b[item]) {
          deeplyEquals = false;
        }
        recurse(a[item], b[item])
      } 
    } else {
      if(a !== b) {
        deeplyEquals = false;
      }
    }
    
  }
  recurse(a,b);
  return deeplyEquals;
};  

var a = { foo: 'bar' };
    var b = { foo: 'bar' };



// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

// DO NOT use JSON.stringify.