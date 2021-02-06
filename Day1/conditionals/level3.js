var month = prompt("Enter a month:")
month = month.toLowerCase()

switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(month + " has 31 days.")
        break
    case "february":
        console.log(month + " has 28 days on common years and 29 days on leap year.")
        break
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(month + " has 30 days.")
        break
    
    
    
    
    
    
    
}