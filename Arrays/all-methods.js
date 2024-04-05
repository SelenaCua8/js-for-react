import { students } from "./index.js";




//Combinarlos
const result = students
  .map(({ name, lastname, age }) => ({
    student: `${name} ${lastname}`,
    age,
  }))
  .filter((student) => student.age > 20)
  .sort((a, b) => b.age - a.age)
  .reduce((total, student) => total + student.age, 0);

console.log(result);

//primero utilizo un map quiero retornan/crear, u  objeto llamado student con name y last name y su edad
//con filter filtra solo las edades de > 20, con sort los ordena de mayor a menor (si quiere de menor a mayor seria a.age - b.age), y por ultimo da la suma de las edades 