// Lab Assignment
//  Task 1:
// • Write a program that changes the background color of a webpage after 5 secondsusing
// setTimeout().
//  Task 2:
// • Create a digital clock that updates every second using setInterval().



setTimeout(() => {

    const randomColor =  `#${Math.floor(Math.random() * 16777216 ).toString(16)}`
    console.log(randomColor);
    
    document.body.style.backgroundColor  = randomColor


}, 2000 )


setInterval(() => {

    const today = new Date() ;
    const getData =`${today.getHours().toString().padStart(2,"0")} : ${today.getMinutes().toString().padStart(2,"0")} : ${today.getSeconds().toString().padStart(2,"0")}`;
    document.querySelector("div").innerHTML = getData

    const randomColor =  `#${Math.floor(Math.random() * 16777216 ).toString(16)}`
    console.log(randomColor);
    
    document.body.style.backgroundColor  = randomColor

}, 1000 )

