//number manipulation program to work with any user input

let numbers = "Enter 10 numbers using decimals or whole:"; //ask the user to input 10 numbers (whole or decimals)
let numsStored = []; //store these numbers in an array

while (true) {
    question = Number(prompt(numbers));
    numsStored.push(question);
    console.log(numsStored.sort(function(a, b){return a -b}));
    if (numsStored[9]) {
        console.log(totalNums(numsStored)); //find the total of all numbers entered and add it to the console
        console.log(minNum(numsStored)); //find the index of the mimimum number and log the result to the console
        console.log(maxNum(numsStored)); //find the index of the maximum and log the result to the console
        console.log(avgNum(numsStored)); //calculate the average of the numbers and round off to 2 decimals
        console.log(median(numsStored)); //calculate the median
        break;
} 
}

//function to find the total of all numbers in the array
function totalNums(arr) {
    let total = 0;
    for (let a of arr) 
        total += a;
    console.log(total); 

}

//function to find the minimum number in the array
function minNum(arr) {
   let min = arr[0];
   for (let i = 0; i < arr.length; i++) { 
        if (arr[i] < min) {
            min = arr[i];
        }
   }
   console.log(arr.indexOf(min));
}

//function to find the maximum number in the array
function maxNum(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    } 
    console.log(arr.indexOf(max));
}

//function to calculate the avg of numbers in the array
function avgNum(arr) {
    let avg = 0;
    for(let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        avg += currentNum;
    }
    avg = avg / arr.length;
    console.log(avg.toFixed(2));

}

//function to find the median of the array
function median(arr) {
    numsStored.sort(function(a, b){return a -b});
    let length = arr.length;

    if (length % 2 == 1) {
        //length is odd
        
        return arr[(length/2) - .5];
    }
    else {
        //length is even
        
        return (arr[length/2] + arr[(length/2) -1]) /2;
    }  
}


























//find the median number and log the result to the console


