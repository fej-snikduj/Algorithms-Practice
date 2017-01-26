var MedianStream = function () {
  this.stream = [];
};

MedianStream.prototype = {
  insert: function (value) {
    //insert the value into the array if the length is 0
    if(this.stream.length === 0) {
      this.stream.push(value);
      return value;
    }
    //find the location in the array that the value belongs
    for(var i = 0; i < this.stream.length; i++) {
      //if the insert value is less than current value, add it to current position
      if( value <= this.stream[i] ) {
        this.stream = this.stream.slice(0, i).concat([value], this.stream.slice(i));
        return value;
      }
    }
    
    //if the function makes it to this part, the value is the largest in the array, and it can be pushed to end
    this.stream.push(value);
    return value;

  },
  getMedian: function () {
    var size = this.size();
    //if the size is zero, return zero
    if(size === 0) {
      return 0;
    }
    //if the length of stream is odd
    if(size % 2 !== 0) {
      //find the middle value
      var middle = Math.floor(size / 2);
      return this.stream[middle];
    }
    //if the size is even
    if(size % 2 === 0) {
      //reture the average value of the middle two values
      var middle1 = Math.floor(size /2);
      var middle2 = middle1 - 1;
      var averageValue = (this.stream[middle1] + this.stream[middle2]) / 2;
      return averageValue;
    }

  },
  size: function () {
    //return length of stream
    return this.stream.length;
  }
};


// MedianStream
// This one is heaps of fun...

// Given a stream of unordered integers, find the median of the stream any time we want it. 
// We will be asked to find the median multiple times, so the peekMedian function should have optimal time complexity.

// Reminder: The median is the middle number of a sorted array. It is the average of the two middle numbers in a sorted array with an even number of element.

// Here's a resource which may help:
// http://eloquentjavascript.net/1st_edition/appendix2.html

// // [1, 4, 8]
// // Median is 4 (middle number)

// // [1, 3, 7, 8]
// // Median is 5 (difference between two middle numbers)


// Using the MedianStream class: 
// // var mStream = new MedianStream();
// // mStream.insert(1);
// // mStream.insert(3);
// // mStream.insert(2);
// // mStream.peekMedian(); 
// // => 2
// // mStream.insert(5);
// // mStream.insert(4);
// // mStream.peekMedian(); 
// // => 3

// ______________
// Problem:

// var MedianStream = function () {
// // TODO: Implement!
// };

// MedianStream.prototype = {
// insert: function () {/**/},
// getMedian: function () {/**/},
// size: function () {/**/}
// };