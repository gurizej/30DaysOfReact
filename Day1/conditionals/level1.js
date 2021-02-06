console.log("1. ")
const myAge = 28
var theirAge = prompt("Enter your age:")

if(theirAge>=18){
    alert("You are old enough to drive.")
} else {
    alert("You are left with " + (18-theirAge) + " years to drive")
}

console.log("2. ")
if(myAge>theirAge){
    alert("I am " + (myAge-theirAge) + " years older than you!")
} else {
    alert("You are " + (theirAge-myAge) + " years older than me!")
}

console.log("3. ")
let a = 4
let b = 3
let response = ""
if(a>b){
    response = a + " is greater than " + b
} else {
    response = b + " is greater than " + a
}

console.log(response);

(a>b) ? (response = a + " is greater than " + b) : (response = b + " is greater than " + a)

console.log(response);

console.log("4. ")
var numberEntered = prompt("Enter a number")
if(numberEntered%2==0){
    alert(numberEntered + " is an even number")
} else {
    alert(numberEntered + " is an odd number")
}