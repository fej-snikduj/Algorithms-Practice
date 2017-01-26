var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(person1, person2){
  var ancestors1 = this.getAncestorPath(person1);
  var ancestors2 = this.getAncestorPath(person2);

  if (ancestors1 === null || ancestors2 === null) {
    return null;
  }

  for (var i = ancestors1.length-1; i >= 0; i--) {
    if (ancestors2.indexOf(ancestors1[i]) !== -1)
      return ancestors1[i];
  }

  return null;
  
}

Tree.prototype.getAncestorPath = function(child){
  //initialize a path variable 
  var path = [];

  if (child === this) {
    return path.push(this);
  }

  //recursively go through children
  var recurse = function(parent) {
    //one base case is if the parent equals the child we are searching for
    if(parent === child) {
      path.push(parent);
      return true;
    }

    //one base case is if the children array is null
    if(parent.children.length === 0) {
      return;
    }

    //recursive case
    for(var i = 0; i < parent.children.length; i++) {
      if (recurse(parent.children[i])) {
        path.push(parent);
      }
    }
  };
  recurse(this);
  if (path[path.length -1] !== this){
    path.push(this);
  }
  if (path.length === 1) {
    return null;
  }
  return path.reverse(); 
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
var grandma = new Tree();
var mom = new Tree();
var auntElaine = new Tree();
var me = new Tree();
grandma.addChild(mom);
grandma.addChild(auntElaine);
mom.addChild(me);


// // Valid Child
// var grandma = new Tree();
// var mom = new Tree();
// var uncle = new Tree();
// grandma.addChild(mom);
// grandma.addChild(uncle);
// var me = new Tree();
// mom.addChild(me);

// grandma.getAncestorPath(me); // => [grandma, mom, me]
// mom.getAncestorPath(me)  // => [mom, me]
// me.getAncestorPath(me) // => [me]
// grandma.getClosestCommonAncestor(me, uncle); // => grandma

// // Invalid Child
// grandma.getAncestorPath(H R Giger) // => null