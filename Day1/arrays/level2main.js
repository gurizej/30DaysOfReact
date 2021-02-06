console.log("2. ")
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
let words = text.split(" ");
console.log(words)
console.log(words.length)

console.log("3. ")
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart[3] = "Green Tea"

console.log(shoppingCart)

console.log("4. ")
if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
} else {
    countries.push("Ethiopia")
}

console.log("5. ")
if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess")
} else {
    webTechs.push("Sass")
}
console.log(webTechs)

console.log("6. ")
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)