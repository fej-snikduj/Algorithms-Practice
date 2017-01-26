process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    //transform stdin to matrix of integers
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    //iterate over the rows, calculating diagnol sum
    var major = 0, minor = 0;
    a.forEach((row, index) => {
      major += row[index];
      minor += row[row.length - 1 - index];
    });
  
    //calculate the absolute difference
    var diff = Math.abs(major - minor);
    //print diff to stdout
    console.log(diff);

}




//////////////////
//////////////////
/////////////////


function processData(input) {
    var n = readLine();
    var array = readLine().split(' ').map(Number);
    var value = array.reduce((a,b) => {
      return a^b;
    }, 0)
    console.log(value)
} 

var input_array = [];
var input_currentLine = 0;

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   input_array = _input.split('\n')
   processData(input_array);
});

function readLine() {
  return input_array[input_currentLine++];
}
























process.stdin.resume();
process.stdin.setEncoding("ascii");
var inputChunks = "";
process.stdin.on("data", function (chunk) {
    inputChunks += chunk;
});
process.stdin.on("end", function () {
    var parsedData = JSON.parse(inputChunks);
    //send data to generate list function
    generateList(parsedData);
});

function generateList(data) {
  //this is a reverse tree structure, with children pointing to parents.
  //create a storage object
  var indexStorage = {};
  //run through array of objects, adding a children property to each and the index to the index array
  for (var i = 0; i < data.length; i++) {
    //create an empty children array
    data[i].children = [];
    //add index of object as key to storage object
    indexStorage[data[i].id] = i;
  }
  
  //initialze an array that will hold only parent nodes
  var parents = [];
  //run through the array of objects again, adding each to it parent's children array if applicable
  for (var i = 0; i < data.length; i++) {
    var parentId = data[i].parent_id;
    if(parentId) {
      data[indexStorage[parentId]].children.push(data[i]);
    } else {//the node must be a prent node, add it to parent array
      parents.push(data[i]);
    }
  }
  
  
  //the data now is in a convenient form for generating a list
  //recursively go through array, logging to console 
  function recurse(parent, prefix) {
    //base case - no children
    if(parent.children.length === 0) {
      //print to console prefix plus name
      console.log(prefix + parent.name);
      return;
    }
    //recursive case - sort children array by name, then recurse on each child and add dash to prefix
    parent.children.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    
    for (var i = 0; i < parent.children.length; i++) {
      //only print the parent once
      if(i === 0) {
        console.log(prefix + parent.name)
      }
      recurse(parent.children[i], prefix + '-');
    }
  }
  
  //sort the parent array
  parents.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  
  //loop over the parent array, initializing recursive function for each
  for (var i = 0; i < parents.length; i++) {
    recurse(parents[i], '');
  }
  
  
  
  
  
}