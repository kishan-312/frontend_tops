// Lab Assignment
//  Task 1:
// Write a JavaScript program to check if a number is positive, negative, or zero usingan
// if-else statement.
//  Task 2:
// Create a JavaScript program using a switch statement to display the day of theweek
// based on the user input (e.g., 1 for Monday, 2 for Tuesday, etc.).

function numCheck(num) {

    if(num > 0){

        console.log(`${num} is positive number `); 

    }

    else if(num < 0){

        console.log(`${num} is negative number `); 

    }

    else {

        console.log(" number is zero");
        

    }


}

numCheck(12)
numCheck(0)
numCheck(-1)

function getDayOfWeek(dayNumber) {

    switch(dayNumber) {

        case 1 : 
        console.log("Monday");
        break ;

        case 2 : 
        console.log("Tuesday");
        break ;

        case 3 : 
        console.log("Wednesday");
        break ;

        case 4 : 
        console.log("Thursday");
        break ;

        case 5 : 
        console.log("Friday");
        break ;

        case 6 : 
        console.log("Saturday");
        break ;

        case 7 : 
        console.log("Sunday");
        break ;
        
        default :
        console.log("Invalid Input! Enter a number between 1 and 7 ");
        break;

    }


}


getDayOfWeek(1);
getDayOfWeek(12);
getDayOfWeek(4);

