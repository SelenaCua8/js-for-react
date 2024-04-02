console.log('Hola mundo')
//TODO LO QUE HAY QUE SABER DE JAVASCRIPT PARA APRENDER REACT

//FUNCIONES 
/*function hello(){
    //console.log('Hello')
    return 'Hola mundo'
}
hello()


//una función en js puede retornar otra función
function helloWorld(){
    return function(){
        return 'Hello World'
    }
}

console.log(helloWorld()()) //se ejecuta dos veces

//funciones parametros
function hola(name){
    return 'Hola ' + name
}
console.log(hola())

function add(x, y = 0){
    
    return x + y
}
console.log(add(10, 20))

//OBJETOS
const user = {
    name: 'Ryan',
    lastname: 'Perez',
    age: 30,
    addres: {
        country: 'Colombia',
        city: 'Bogotá',
        street: 'main street 123'
    },
    friends: ['Brandon', 'Elena'],
    active: true,
    sendMail: function(){ return 'sending email...'}
}

console.log(user)
console.log(user.name)
console.log(user.sendMail())

const name = 'laptop'
const price = 3000

const newProduct = {
    name: name,
    price: price,
    //o :
    //name,
    //price

}
console.log(newProduct)

//-->manipulación del DOM
const title = document.createElement('h1');
title.innerText = "Hola mundo desde JS";

const button = document.createElement('button');
button.innerText =  'click';
button.addEventListener('click', () =>{
    title.innerText = "Texto actualizado con JS"
    alert('Se realizo un click')
})

document.body.append(title);
document.body.append(button);*/

//DESTRUCTURING
/*const user = {
    name: 'joe',
    age: 30,
}
/*function printInfo(user){
    return '<h1>Hola ' + user.name +  '</h1>'
}
*/
/*function printInfo({name}){
    return '<h1>Hola ' + name +  '</h1>'
}
console.log(printInfo(user))
document.body.innerHTML = printInfo(user)*/

//FUNCIONES ANONIMAS
/*function start(){
    return 'Starting...'
}
console.log(start())

//lo puedo hacer así:
console.log(function (){
    return 'Starting...'
})

const button = document.createElement('button')

button.innerText = 'click me'

button.addEventListener('click', function(){
    alert ('clicked')
})
document.body.appendChild(button)*/

//ARROW FUNCTIONS
/*function add(x, y){
    return x + y
}

//la funcion flecha:
const add = (x, y) =>{
    return x + y
}*/

//INLINE ARROW FUNCTIONS

/*const showText = () =>{
    return 'Hola mundo'
}
console.log(showText())

//ASÏ SE PUEDE HACER
const showTextt = () => 'Hola Mundo';
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1, 2, 3]*/

//RETURN EN FUNCTIONS
/*const button = document.createElement('button')
button.innerText = 'click me'

const isAuthorized = true

button.addEventListener('click', () =>{
    if (isAuthorized) {
        alert('You are authorized')}
        else {
            alert('You are not authorized')
        }
})
document.body.append(button)*/

//STRING LITERALS
/*const background = 'red'
const color = 'white'
const isAuthorized = true

//const result =`Estos son estilos: ${background} ${color}`


const button = document.createElement('button')
button.innerText = 'click me'
button.style = 'background: red; color: white'
//Ó
button.style =  `background: ${isAuthorize ? 'blue' : 'red'}; color: ${color}`



button.addEventListener('click', () =>{
    if (isAuthorized) {
        alert('You are authorized')}
        else {
            alert('You are not authorized')
        }
})
document.body.append(button)*/

//ARRAY METHODS = listar varios elementos

/*const names = [' ryan', 'joe', 'maria']

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element)
}
//son lo mismo pero en react se utiliza forEach o map
names.forEach(function (name){
    console.log(name)
})

const newNames =  names.map(function (name){
    return name
})
console.log(newNames)*/

//find busca un elemento
//filter permite crear un nuevo arreglo con elementos que hayan filtrado es como un delete

//SPREAD OPERATOR
const names = ['ryan', 'joe', 'maria']
const NewNames = ['marcos', 'mario', 'john']

console.log([...names, ...newNames]) //otra forma de concatenar

const user = {
    name: 'John',
    lastname: 'perez'
}

const address = {
    street: 'street 1',
    city: 'bogota'
}

const userInfo = {
    ...user,
    ...adress
}

//ECMA SCRIPTS

import {add} from './add.js'
add(10, 20)


