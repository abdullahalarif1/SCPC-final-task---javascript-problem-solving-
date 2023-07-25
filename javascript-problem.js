// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built -in reverse() method. 
function reverseText(str) {
    let reverseString = ''
    for (const i in str) {
        reverseString = str[i] + reverseString;
    }
    return reverseString;
}

const result = reverseText('Hello World')
console.log(result);


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
function sumPositiveNumbers(arr) {
    let sum = 0
    for (const num of arr) {
       if(num > 0){
        sum += num
       }
    }
    return sum
}

const arrayOfNum = [2, -5, 10, -3, 7]
const result2 = sumPositiveNumbers(arrayOfNum)
console.log(result2);