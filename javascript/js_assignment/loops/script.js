// Lab Assignment
//  Task 1:
// Write a JavaScript program using a for loop to print numbers from 1 to 10.
//  Task 2:
// Create a JavaScript program that uses a while loop to sum all even numbers
// between 1 and 20.
//  Task 3:
// Write a do-while loop that continues to ask the user for input until they enter a
// number greater than 10.

// print numbers 1 to 10

for(let i=1;i<=10;i++) {

    console.log(i);

}


// sum all even numbers

let sum = 0;
let i = 1; 

while(i<=20) {

    if(i % 2 === 0) {

        console.log(`${i}`);
        sum+=i;

    }

    i++;

    
}
console.log(`sum of all even numbers, ${sum} `);


// ask the user for input

let number ;

do {

    number = parseInt(prompt("enter a number greater than 10"));

}

while(number<=10);






