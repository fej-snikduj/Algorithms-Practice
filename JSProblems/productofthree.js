function largestProductOfThree (array) {

  //if not at least three values in array, return undefined
  if(array.length <= 2) {
    return;
  }

  //initiate number array
  var positives = array.filter(value => value > 0);
  var negatives = array.filter(value => value < 0);
  var zeros = array.filter(value =>  value === 0);
  var absoluteValueOfNegatives = negatives.map(value => Math.abs(value));
  var positiveFromNegatives = false;

  //sort positive array
  positives.sort((a,b) => b - a);

  //deterimine if possible to make positive product from negative values
  if(negatives.length >= 0 && negatives.length !== 0) {
    //yes its possible, sort the absolute value array
    absoluteValueOfNegatives.sort((a, b) => b - a);
    positiveFromNegatives = true;
  }


  //if positive from negatives is false and there are less than three numbers in positive array, product must be zero
  if(!positiveFromNegatives  && positives.length <= 3 && zeros.length > 0) {
    return 0;
  }

  //if not positiveFromNegatives, return product of first three positives
  if(!positiveFromNegatives) {
    return positives[0]*positives[1]*positives[2];
  }

  //if positive from negatives is true, we must take the combo of positive and negatives that give us the largest product
  if(absoluteValueOfNegatives[0]*absoluteValueOfNegatives[1] > positives[1]*positives[2]) {
    return absoluteValueOfNegatives[0]*absoluteValueOfNegatives[1]*positives[0];
  } else if (positives)

  //last case, all numbers are negative
  var length = absoluteValueOfNegatives.length;
  return(absoluteValueOfNegatives[length - 1] * absoluteValueOfNegatives [length - 2] * absoluteValueOfNegatives[length - 3] * -1);
}

