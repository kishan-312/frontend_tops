// Lab Assignment(Task)
// Create a JavaScript program to perform the following:
//  Add, subtract, multiply, and divide two numbers using arithmetic operators.
//  Use comparison operators to check if two numbers are equal and if onenumber is greater
// than the other.
//  Use logical operators to check if both conditions (e.g., a > 10 and b < 5)are true.


function numb(a,b) {

    console.log("addition",a+b);
    console.log("subtraction",a-b);
    console.log("multiplication",a*b);
    console.log("divison",a/b);
    
    console.log("two numbers are equal", a == b);
    console.log("one no is greator than the other", a > b);

    console.log(a>10 && b<5);
    console.log(a>10 || b<5);
    console.log(!(a==b));
    
    


}

numb(12,13)


