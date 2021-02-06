// console.log("1. ")
// var grade = prompt("Enter score:")

// switch (true) {
//     case grade>79:
//         console.log("A")
//         break
//     case grade>=70:
//         console.log("B")
//         break
//     case grade>=60:
//         console.log("C")
//         break
//     case grade>=50:
//         console.log("D")
//         break
//     case grade<50:
//         console.log("F")
//         break
//     default:
//         alert("Not possible")
//         break
// }

// console.log("2. ")
// var month = prompt("Which month are we in?")

// switch (month) {
//     case "september":
//     case "october":
//     case "november":
//         console.log("Autumn")
//         break
//     case "december":
//     case "january":
//     case "february":
//         console.log("Winter")
//         break
//     case "march":
//     case "april":
//     case "may":
//         console.log("Spring")
//         break
//     case "june":
//     case "july":
//     case "august":
//         console.log("Summer")
//         break
//     default:
//         console.log("what?")
//         break
// }

console.log("3. ")

var day = prompt("What is the daay today?")
day = day.toLowerCase()

switch (day) {
    case "saturday":
    case "sunday":
        console.log(day + " is a weekend.")
        break
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(day + " is a working day.")
        break
    default:
        console.log("Can't you follow directions?")
}