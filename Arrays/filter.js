import students from './index.js'

const studentss = []

const result = students.filter(function(student){
    if(student.course === 'Web Development'){
        return true
    }

})
console.log(result)
//lo mismo en funcion flecha

const resultt = students.filter(student => student.course === 'Web Development')
console.log(resultt)