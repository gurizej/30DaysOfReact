//1
function solveQuadratic(a, b, c){
    if(a==0){
        console.log("a cannot be equal to 0")
        return
    }
    var result = Array()
    var firstAns = (-1*b+Math.sqrt((b*b)-4*a*c))/(2*a)
    var secondAns = (-1*b-Math.sqrt((b*b)-4*a*c))/(2*a)
    
    if(firstAns===secondAns){
        result.push(firstAns)
    }else {
        result.push(firstAns)
        result.push(secondAns)
    }

    return result
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//2 
function printArray(arr){
    for(const a in arr){
        console.log(a)
    }
}

//3
function showDateTime(){
    var nowDate = new Date()
    var result = nowDate.getMonth() + "/" + nowDate.getDay() + "/" + nowDate.getFullYear() + " " + nowDate.getHours()+":"+nowDate.getMinutes()
    console.log(result)
}

//4
function swapValues(x,y){
    var temp = x
    x = y
    y = temp
}


//5
function reverseArray(arr){
    var newArr = Array()
    
    for(var i=0; i<=arr.length-1; i++) {
        newArr[i] = arr[arr.length-1-i]
    }
    return newArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))

//6
function capitalizeArray(arr){
    var newArr = Array()
    for(var i=0; i<=arr.length-1; i++) {
        newArr[i] = arr[i].toUpperCase()
    }
    return newArr
}

//8
function removeItem(arr, index){
    var newArr = Array()
    for(var i=0; i<=arr.length-1; i++) {
        if(i===index){
            continue
        } else{
            newArr[i] = arr[i]
        }
        
    }
    return newArr
}

console.log(removeItem([1, 2, 3, 4, 5],3))

//9
function evensAndOdds(x){
    if(x<0){
        return "This is not a positive number"
    }else {
        var numOdds = 0
        var numEvens = 0
        for(var i=0; i<=x; i++){
            if(i%2==0){
                numEvens++
            }else {
                numOdds++
            }
        }
        console.log("The number of odds are " + numOdds)
        console.log("The number of evens are " + numEvens)
    }
}
evensAndOdds(100);

//13
const sum = (...args) => {
    let total = 0
    for(const a of args){
        total += a
    }
    return total
}

console.log(sum(1, 2, 3)) // -> 6
console.log(sum(1, 2, 3, 4)) // -> 10

function userIdGenerator(){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
