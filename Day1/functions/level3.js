function userIdGeneratedByUser(){
    var numOfCharacter = prompt("How many characters per ID?")
    var numOfIds = prompt("How many ids should we create?")
    var arr = Array()
    for(var i=0; i<=numOfIds; i++){
        arr.push(userIdGenerator(numOfCharacter))
    }
    return arr
}
function userIdGenerator(length){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateColors(type, numOfColors){
    let arr = Array()
    switch(type){
        case "rgb":
            for(var i=0; i<numOfColors; i++){
                arr.push("rgb("+Math.floor(Math.random() * Math.floor(255))+","+Math.floor(Math.random() * Math.floor(255))+","+Math.floor(Math.random() * Math.floor(255))+")")
            }
            break
        case "hexa":
            var chars = "ABCDEF0123456789"
            for(var i=0; i<numOfColors; i++){
                let r = ""
                for ( var i = 0; i < 6; i++ ) {
                    r += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                arr.push("#"+r)
            }
            break
    }
    return arr
}
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

function shuffleArray(arr){
    var currentIndex = arr.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;

}

function factorial(x){
    let result = 1
    for(var i=1; i<=x; i++){
        result = result*i
    }
    return result
}

function isEmpty(x){
    if(x==null || x==""){
        return true
    } else {
        return false
    }
}

function average(arr){
    let result = 0
    for(var i=0; i<arr.length; i++){
        if(typeof arr[i] === "number"){
            result += arr[i]
        } else {
            return "Element " + i + " in array is not a number"
        }
    }
    return result
}
