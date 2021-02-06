const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
console.log("2. ")
for (const key in users) {
    if(users[key].points>=50) {
        console.log(key)
    }
}

console.log("3. ")
for (const key in users) {
    const s = users[key].skills
    for(var i=0; i<s.length; i++) {
        if(s[i] == "MERN") {
            console.log(key)
        }
    }
}

console.log("4. ")
const Guri = {
    email: 'guri@guri.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 28,
    isLoggedIn: false,
    points: 100
}
users.Guri = Guri
console.log(users)

console.log("5. ")
for (const key in users) {
    console.log(users[key])
}

console.log("6. ")
for (const key in users) {
    console.log(users[key].email)
    console.log(users[key].skills)
    console.log(users[key].age)
    console.log(users[key].isLoggedIn)
    console.log(users[key].points)
}
