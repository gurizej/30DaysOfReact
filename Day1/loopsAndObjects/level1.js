console.log("1. ")

const dog = {}

console.log(dog)
dog.name = "Rana";
dog.legs = 4
dog.color = "Brown"
dog.age = 4
dog.bark = function(){
    return "woof woof"
}
console.log(dog)
console.log(dog.bark())

dog.breed = "pitbull"
dog.getDogInfo = function(){
    return "Name: " + this.name +
            "\nLegs: " + this.legs +
            "\nColor:" + this.color + 
            "\nAge: " + this.age +
            "\nBark: " + this.bark() +
            "\nBreed: " + this.breed 
}
console.log(dog.getDogInfo())

