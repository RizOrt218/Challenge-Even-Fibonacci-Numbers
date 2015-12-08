/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};

function _sumFibs( maxFibValue ) {
  var sum = 0;
  var firstNum = 0;
  var secondNum = 1;
  var nextNum = 1;

  if(maxFibValue < 2){
    return 0;
  }

  for(var i = 2; i <= maxFibValue; i++ ){
    nextNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = nextNum;

  if(nextNum % 2 ===0){
    sum += nextNum;
  }

  }
  return nextNum;






  return sum;
}

// bonus round
function highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
}