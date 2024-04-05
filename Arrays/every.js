import { students } from "./index.js";

const resultt = result.every(student => student.age === 20)
console.log(resultt)



const result = students.every((student) => student.name.includes("J"));

console.log(result);

//Todos tienen que cumplir la condición para que sea verdadera