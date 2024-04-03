//OBJETO
    const user = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    hobbies: ['read', 'programming', 'run'],
    addres: {
        street: 'some street',
        city: 'London'
    }
}
console.log(user)

function showFullName(){
    return 'John Travolta'
}

//PROPERTIES

const users = {
    name: "John", //clave, valor 
    lastname: "Travolta",
    age: 30,
    showFullName: function(){
        return 'John Travolta'
    }
}

//METHODS

user.showFullName()

//THIS
const userss = {
    name: "Juan", //clave, valor 
    lastname: "Peréz",
    age: 30,
    showFullName: function(){
        return this.name + ' ' + this.lastname
    }
}
//return Juan Peréz
const account = {
    number: "12321561365165165",
    amount: 100,
    deposit() {
        this.amount = this.amount + 100
    },
    withdraw(){
        this.amount = this.amount - 200
    }
}

const accountt = {
    number: "12321561365165165",
    amount: 100,
    deposit(quantity) {
        this.amount = this.amount + quantity
    },
    withdraw(quantity){
        this.amount = this.amount - quantity
    }
}

//CONSTRUCTOR

const user1 = {
    name: "Martin", //clave, valor 
    lastname: "Peréz",
    age: 30,
    showFullName: function(){
        return this.name + ' ' + this.lastname
    }
}
const users2 = {
    name: "Sol", //clave, valor 
    lastname: "Peréz",
    age: 30,
    showFullName: function(){
        return this.name + ' ' + this.lastname
    }
}

//podes hacerlo así:

function Person (){
    this.name = "",
    this.lastname = "",
    this.age = 0,
    this.showFullName = function(){
        return this.name + ' ' + this.lastname
    }
}
const user2 = new Person()
user2.name= "Oscar",
user2.lastname= "Fagnani",
user2.age= 80
console.log(user2.showFullName())


const user3 = new Person()
const user4 = new Person()
const user5 = new Person()

//objetos creados por js
const number = new Object(12)
console.log(number)

//PROTOTYPE
//CLASS
function Persons(){
    this.name = ''
    this.lastname = ''
}
//lo mismo que arriba
class Person{
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }

    greet(){
        return  'Hello I am' + this.name + this.lastname
    }


}
const user6 = new Person('joe', 'perez')
const user7 = new Person('juan', 'perez')

console.log(user6.greet())
console.log(user7.greet())
