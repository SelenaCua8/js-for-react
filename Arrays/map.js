import students from './index.js'
const studends = []

const result = students.map(function (student){
    return student.name + ' ' + student.lastname
})

console.log(result)
//otra forma de escribirlo, con funcion flecha

const names = students.map(student => student.name + ' ' + student.lastname)
console.log(names)

//alterar un objeto
const name = students.map(student =>{
    return {
        fullname : student.name + ' ' + student.lastname,
        age: student.age,
        course: student.course

    }
})
console.log(name)

const namee = students.map(student =>{
    return{
        name: student.name,
        lastname: student.lastname,
        age: student.age,
        course: student.course,
        title: student.name + ' ' + student.course
    }
}) //agrega un dato extra
console.loge(namee)
//tambien puedo hacerlo así:
const naame = students.map(studend =>{
    return{
        ...student,
        course: 'Programming'
    }
}) //copio todos los datos y altero el valor que quiero cambiar 
//tambien la función flecha se puede borrar el return y sacar sus llaves, para verse esteticamente más lindo, corto
console.log(naame)