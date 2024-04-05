import {students} from './index.js'

const resultt = students.some(function(student){
    if(student.age === 20)
    {
        return true
    }
})
console.log(resultt)


const result = students.some((student) => student.lastname === "Doe");

console.log(result);
//retorna true, si habia algun objeto q de con la condicion retorna true