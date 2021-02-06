console.log("1. ")
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort())
var min = ages[0]
var max = ages[ages.length-1]
var median = ages[Math.round((ages.length - 1) / 2)]
var average = 0
for(var i=0; i<ages.length; i++){
    average += ages[i];
}
average = average/ages.length
var range = max - min


console.log("min, max, median, average, range " + min + " " + max + " " + median + " " + average + " " + range)


console.log(countries.slice(0,10))

console.log("2. ")
console.log(countries[Math.round((ages.length - 1) / 2)])

console.log("3. ")
var firstArr = countries.slice(0, Math.round((ages.length - 1) / 2))
var secondArr = countries.slice(Math.round((ages.length - 1) / 2), countries.length)

if(firstArr.length<secondArr.length){
    firstArr.push("Kosovo")
}
console.log(firstArr)
console.log(secondArr)