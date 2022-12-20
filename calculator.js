//program to calculate any 2 numbers given 

let firstNum = Number(prompt("Enter your first number")); //prompt user to input the first number, second number and operation they want to perform
let secNum = Number(prompt("Enter your second number:"));
let calculation = prompt("Which calculation would you like to perform?\n\n a. Addition\n b. Subtraction\n c. Division\n d. Multipilcation");
let calLower = calculation.toLowerCase();

if (calLower == 'a') {
    console.log(`${firstNum} + ${secNum} = ${addition(firstNum, secNum)}`); //log the calculation and output to the console
} else if (calLower == 'b') {
    console.log(`${firstNum} - ${secNum} = ${subtraction(firstNum, secNum)}`);
} else if (calLower == 'c') {
    console.log(`${firstNum} / ${secNum} = ${division(firstNum, secNum)}`);
} else {
    console.log(`${firstNum} * ${secNum} = ${multiply(firstNum, secNum)}`);
}

//function to add two numbers together
function addition(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

//function to subtract the second number from the first
function subtraction(num1, num2) {
    let sum = num1 - num2;
    return sum;
}

//function to divide the first number by the second number
function division(num1, num2) {
    let sum = num1 / num2;
    return sum;
}

//function to multiply the two numbers together
function multiply(num1, num2) {
    let sum = num1 * num2;
    return sum;
}





