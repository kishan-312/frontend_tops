// Lab Assignment
// Task:
// • Write a JavaScript program that attempts to divide a number by zero. Use try-catch to
// handle the error and display an appropriate error message.

function divideNo(dividend,divisor) {

    try {

        let data = dividend / divisor ;
        console.log(data);
        
        
    } 
    
    catch (error) {

        if(error instanceof RangeError || error instanceof TypeError) {

            console.log(error,"can't divide by zero");

        }

        else {

            console.log('unexpected error occured',error.message);
            

        }
        
    }

}


divideNo(10,0)