console.log("1. ")
const personAccount = {
    firstName: "",
    lastName: "",
    incomes: Array(),
    expenses: Array(),

    accountInfo: function(){
        return "First Name: " + this.firstName + "\n " +
                "Last Name: " + this.lastName + "\n " +
                "Incomes: " + this.incomes+ "\n " +
                "Expenses: " + this.expenses
    },
    addIncome: function(income) {
        this.incomes.push(income)
    },
    addExpense: function(expense) {
        this.expenses.push(expense)
    }
}

console.log("2. ")
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

// _id: 'ab12ex',
// username: 'Alex',
// email: 'alex@alex.com',
// password: '123123',
// createdAt: '08/01/2020 9:00 AM',
// isLoggedIn: false,
function signUp(id, username, email, password) {
    for(const user in users){
        if(user.email === email){
            return "You already have an account!"
        }else {
            createDay = new Date()
            var hours = createDay.getHours()
            var minutes = createDay.getMinutes()
            var amPM = hours >= 12 ? 'PM' : 'AM'
            hours = hours % 12
            users.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: createDay.getMonth() + "/"+createDay.getDay()+ "/" +createDay.getYear() + " " + hours + ":" + minutes + " " + amPM,
                isLoggedIn: false
            })
        }
    }
}
