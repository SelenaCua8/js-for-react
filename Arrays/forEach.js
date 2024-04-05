import students from './index.js'

//for(let i = 0; i < students.length; i++){
  //  console.log(students[i] )
//} //muestra uno x uno los estudiantes

/*students.forEach(function(student, index, students){
    console.log(student)
    console.log(index)
    console.log(students)
})*/
// es lo mismo que la de arriba

const fullnames = []


students.forEach((student) => {fullnames.push(student.name + ' ' + student.lastname)}); //para crear un nuevo arreglo, por eso hay que crear un arreglo con forEach sino, no retorna nada

console.log(fullnames)