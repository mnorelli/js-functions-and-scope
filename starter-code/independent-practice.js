/*
  1. Write a function `lengths` that accepts a single parameter as an argument, namely
  an array of strings. The function should return an array of numbers where each
  number is the length of the corresponding string.
*/

// your code here
var words = ["hello", "what", "is", "up", "dude"]
function lengths(list) {
  var newList = []
  list.forEach(function(i){
    newList.push(i.length)
  })
  return newList;
}
console.log("Question 1: " + lengths(words));
/*
  2. Write a Javascript function called `transmogrifier`
  This function should accept three arguments, which you can assume will be numbers.
  The transmogrified result of three numbers is the product of the first two numbers,
  raised to the power of the third number.
  Your function should return the "transmogrified" result.
*/

// your code here
function transmogrifier(num1, num2, num3) {
  return Math.pow((num1*num2),num3);
}
console.log("Question 2: Transmogrifying 8, -2, and 3 gives: " + transmogrifier(8,-2,3))
/*
  3. Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words (not letters) reversed. Don't worry
  about punctuation. I.e. "hello world" should become "world hello".
*/

// your code here
var phrase = "Good day, old bean."
function wordReverse(str) {
  strArray = phrase.split(' ')
  var ans3 = ""
  for (i=strArray.length;i>=0;i--) {
    if (i!=strArray.length) {
        ans3 = ans3 + " " + strArray[i]}
  }
  return ans3
}
console.log("Question 3: reversing "+ phrase + " gives " + wordReverse(phrase))
