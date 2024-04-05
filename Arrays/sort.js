import students from './index.js'
//recibe dos objetos, el primero de la lista y el que le sigue
const sortedStudents = students.sort(function(first, second){
    if(first.age > second.age) {
        return 1
    }else {
        return -1
    }
})
console.log(sortedStudents)
//así ordena las edades de menor a mayor


const studentsage = students.sort((a, b) => a.age > b.age ? 1 : -1)
//lo mismo de arriba
console.log(studentsage)

//ORDENO DE MAYOR A MENOR O MENOR A MAYOR YA QUE COMPARA EL PRIMERO CON EL SEGUNDO, EL SEGUNDO CON EL TERCERO, ETC EL METODO SORT

const number = [1, 3, 1000, 100]
console.log(number.sort((a,b) => a - b))
//ordena numeros de menor a mayor