var hasCycle = function(linkedList){
  //Your beautiful code here


  //traverse through linked list and check for cycle using recursion
  var recurse = function(listItem, storage) {
    //base case 1, next value equals null, so return false and exit
    if (listItem.next === null) {
      return false;
    }

    if(listItem.value in storage && listItem.next === storage[listItem.value]) {
      return true;
    }

    storage[listItem.value] = listItem.next;
    return recurse(listItem.next, storage);
  
  }
  return recurse(linkedList, {});
};



function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

// Linked List Cycles
// Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

// Explanation:

// Generally, we assume that a linked list will terminate in a null next pointer, as follows:

//  A -> B -> C -> D -> E -> null
// A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

// This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

//  A -> B -> C
//       ^    |
//       |    v
//       E <- D
// 'Constraint 1: Do this in linear time'

// 'Constraint 2: Do this in constant space'

// 'Constraint 3: Do not mutate the original nodes in any way'

// You've got Helpers! (click to view code)
