class animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
      }
      speak(){
          console.log("roar")
      }
}

class dog extends animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
    speak(){
        console.log("woof")
    }
}

class cat extends animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }
    speak(){
        console.log("meow")
    }
}

let c = new cat("zeus", 8, "orange", 4)
let d = new dog("rana", 4, "brown", 4)
c.speak()
d.speak()