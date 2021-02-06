//1.
function fullName(first, second){
    return first + "-" + second
}

//2.
function addNumber(first, second){
    return first+second
}

//3
function calculateCircleArea(radius){
    return Math.PI * radius * radius
}

//4
function celToFar(cel){
    return (cel * (9/5)) + 32
}

//5
function calculateBmi(weight, height){
    var bmi = weight/(height*height)
    switch(true){
        case bmi<18.5:
            return "Underweight"
            break
        case bmi<24.9:
            return "Normal wweight"
            break
        case bmi<29.9:
            return "Overweight"
            break
        default:
            return "Obese"
            break
    }
}

//6
function checkSeason(month){
    switch (month) {
        case "september":
        case "october":
        case "november":
            return "Autumn"
            break
        case "december":
        case "january":
        case "february":
           return "Winter"
            break
        case "march":
        case "april":
        case "may":
           return "Spring"
            break
        case "june":
        case "july":
        case "august":
           return "Summer"
            break
        default:
            return "what?"
            break
    }
}