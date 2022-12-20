//create an inventory program of shoes and methods to interact with the array

let array = []; //empty array to store instances

class Shoes {
    constructor(name, prodCode, quantity, valPerItem) {
        //object properties
        this.name = name; 
        this.prodCode = prodCode;
        this.quantity = quantity;
        this.valPerItem = valPerItem;

    }  
    highestVal(arr) { //method to find the highest value per item
        let max = this.valPerItem //max val variable
        let shoe = this.name      //shoe name variable
            for (let a of arr) { //loop through the array
                if (a.valPerItem > max) { //if val index is greater than max return shoe
                    max = a.valPerItem
                    shoe = a.name  
                }
            } return shoe; //output shoe
    }
    lowestVal(arr) { //method to find the lowest value per item
        let min = this.valPerItem //min valperitem variable
        let shoe = this.name    //shoe name variable
            for (let a of arr) { //loop through the array
                if (a.valPerItem < min) { //if val index is less than than min return shoe
                    min = a.valPerItem
                    shoe = a.name  
                }
            } return shoe; //output shoe
    }
    search(arr) { //method to search for any shoe within the array
        let x = false; //create a boolean variable
        for (let a of arr){ //loop through the array
            if (a.name == this.name) { //if index of array is equal to name property
                x = true 
            }
        } if (x) { //if true return found shoe name
            return this.name + " has been found!"
        } else { //else return that the shoe is not in the array
            return this.name + " has not been found!"
        }
    
    }

};

//create 5 instances of the shoes class
let crocs = new Shoes("Crocs", 841, 500, 49.99); //property values
array.push(crocs);
let drMarten = new Shoes("Dr Marten", 112, 200, 89.95);
array.push(drMarten);
let Converse = new Shoes("Converse", 000, 500, 45.95);
array.push(Converse);
let vans = new Shoes("Vans", 111, 200, 34.59);
array.push(vans);
let airForce = new Shoes("Air Force One", 110, 1000, 69.99);
array.push(airForce);

airForce.quantity = 9000; //change any aspect of an instance
console.log(array);


//method to order objects in ascending order
function sortName(arr) {
    let sortArr = []; //create empty array for the sorted objects
    for (let obj of arr) { //loop through the current array 
        sortArr.push(obj); //push each object into new array
    }
    return sortArr.sort(function (a, b) { //return the new array in sorted ascending order
        let i = a.name.toLowerCase(); 
        let j = b.name.toLowerCase();
        if (i < j) { return - 1; }
        if (i > j) { return 1; }
        return 0;
    })
}
console.log(sortName(array));
console.log(vans.search(array));
console.log("The lowest value shoe is: " + vans.lowestVal(array));
console.log("The highest value shoe is: " + drMarten.highestVal(array));









