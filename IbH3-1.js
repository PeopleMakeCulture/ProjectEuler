//Problem 1: Find the sum of all the multiples of 3 or 5 below 1000.

//pseudocode:
//1. make an array 
//2. add all numbers that are multiples of 3 or 5 below 1000 to array
//3. sum up the array

//make an array
A = [];

//add all numbers that are multiples of 3 or 5 below 1000 to array
function getMultiples (max) {
  for (var i=1; i<max; i++) {
    if ((i % 3 == 0 && i%5!=0)||(i%5==0&&1%3!=0)||(i%3==0&&i%5==0)){
      A.push(i);
      console.log(i);
    }
  }
  return A;
}

getMultiples(1000);

//sum an array
function sumOfArray(myArray){
  var sum = 0;
  for (var i = 0; i<myArray.length; i++) {
    sum += myArray[i];
  }
  return sum;
}

sumOfArray(A);




