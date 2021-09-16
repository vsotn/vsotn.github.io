alert('Sotnikov');

let variableA = "A";
let variableB = "B";

console.log(variableA, variableB);

variableA = variableB;

console.log(variableA, variableB);

let varString = "String";
let varNumber = 10;
let varBoolean = false;
let varUndefined;
let varNull = null;

console.log(typeof varNumber, typeof varBoolean, typeof varString, typeof varNull, typeof varUndefined);

function confirmFoo(){
    let isAdult = confirm("Are you 18 or more years old?");
    console.log(isAdult);
}
confirmFoo();

function userEmailAndPassword (){
    let userLogin = prompt("Enter your login");
    let userEmail = prompt("Enter your Email");
    let userPassword = prompt("Enter your password");
    console.log("Dear " +userLogin+ ", your email is " +userEmail+ ", your password is " +userPassword);
}
userEmailAndPassword();

//Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран. 
function howManySecondsIn (hoursToCount, daysToCount, monthsToCount){
    let howManySecondsInHours = hoursToCount*3600;
    let howManySecondsInDays = daysToCount*24*3600;
    let howManySecondsInMonths = monthsToCount*30*24*3600;
    console.log(howManySecondsInHours, howManySecondsInDays, howManySecondsInMonths);
}
howManySecondsIn(1, 1, 1);