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
        if (num > 0) {
            sum += num
        }
    }
    return sum
}

const arrayOfNum = [2, -5, 10, -3, 7]
const result2 = sumPositiveNumbers(arrayOfNum)
console.log(result2);


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function findMostFrequent(arr) {
    let frequencyCount = {};
    let maxCount = 0;
    let mostFrequent;

    for (let element of arr) {
        if (frequencyCount[element] == null) {
            frequencyCount[element] = 1;
        }
        else {
            frequencyCount[element]++;
        }

        if (frequencyCount[element] > maxCount) {
            maxCount = frequencyCount[element];
            mostFrequent = element;
        }
    }

    return mostFrequent;
}

const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result3 = findMostFrequent(numbers);
console.log(result3);


// Task 4: Create a function that takes a sorted array of numbers and a target value as input.The function should find two numbers in the array that add up to the target value.Return an array containing the indices of the two numbers.
function findTwoSum(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i, j);
                return result;
            }
        }
    }
    return result;
}
const numbers1 = [1, 3, 6, 8, 11, 15];
const target = 9;
const indices = findTwoSum(numbers1, target);
console.log(indices);




// Task 5: Implement a simple JavaScript calculator.The calculator should take two numbers and an operator(+, -, *, /) as input and return the result of the operation.
function calculator(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    }
    else if (operator === '-') {
        return num1 - num2;
    }
    else if (operator === '*') {
        return num1 * num2;
    }
    else if (operator === '/') {
        return num1 / num2;
    }
    else {
        return "Error: Invalid operator.";
    }
}

const num1 = 10;
const num2 = 5;
const operator = '+';
const result4 = calculator(num1, num2, operator);
console.log(result4);


// Task 6: Create a program that generates a random password of a specified length.The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generatePassword(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}\|;:'\",./<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        password += char;
    }

    return password;
}

const password = generatePassword(12);
console.log(password); 


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers.The function should return the second smallest number.
function secondSmallest(arr) {
    let smallest = Math.min(...arr);
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < secondSmallest && num > smallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}

let numbers2 = [10, 5, 2, 8, 3, 7];
let secondSmallestNumber = secondSmallest(numbers2);
console.log(secondSmallestNumber); 



