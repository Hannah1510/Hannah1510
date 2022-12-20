//fortuneteller program based on the users input
//input questions for the user
	//the users mothers first name
	//the name of the street they grew up on
	//their favourite colour as a child
	//their current age
	//a num between 1 and 10
let mothersName, streetName, favColour, age, num;

mothersName = (prompt("Enter your mother's first name:"));
streetName = (prompt("Enter the name of the street you grew up on:"));
favColour = (prompt("Enter your favourite colour as a child:"));
age = (prompt("Enter your age:"));
num = (prompt("Enter a number between 1-10:"));


//work out 
	//(5) is the num of yrs in which they will meet their best friend
const bestFriendYears = num;

	//best friends name will be (1) + (2)
const bestFriendName = (mothersName + ' ' + streetName);

	//(4) divided by (5) (rounded off) is the num of yrs in which they will get married
const marriedYears = (age / num);
const newYears = Math.round(marriedYears);

	//the remainder of (4) divided by (5) is how many children they will have
const children = (age % num);

	//(4) minus (5) is in how many yrs they will dye their hair (3)
const hairYears = (age - num);

//output the results in a multiline string
console.log(`In ${hairYears} years you will dye your hair.`);
console.log(`In ${newYears} years you will get married and have ${children} children.`);
console.log(`In ${bestFriendYears} years you will meet your best friend, their name will be ${bestFriendName}.`);
