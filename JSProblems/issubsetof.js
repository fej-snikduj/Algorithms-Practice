Array.prototype.isSubsetOf = function(parentArray) {
  //store the parent array values as keys in object
  storageObj = {};

  //loop through the parent array and add values as keys
  for (let i = 0; i < parentArray.length; i++) {
    storageObj[parentArray[i]] = true;
  };

  //loop through (this) array and see if all values are found in storage
  for (let i = 0; i < this.length; i++) {
    if(!storageObj[this[i]]) {
      return false;
    }
  }
  
  return true;
};
