import students from './index.js'

let total = 0

for(let i = 0; i < students.length; i++){
    total += students[i].age
}
console.log(total)
//suma de todos los estudiantes
//se puede hacer con reduce
//dos parametros pueden ir
students.reduce(function(total, student){
    return total + student.age;
}, 0)
console.log(result) //da el mismo resultado

const resultt = students.reduce((total, student => total + student.age, 0))
console.log(resultt) //lo mismo pero funcion flecha

const developers = [
    {
      id: 1,
      name: "John",
      skills: ["HTML", "React", "Javascript", "Java"],
    },
    {
      id: 2,
      name: "Jane",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
    {
      id: 3,
      name: "Jack",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
  ];

//combina el reduce primero con el de abajo
const result = developers.reduce(function(allSkills, student){
    return Array.from(new set([...allSkills, ...student.skills]))
}, [])  
//new set da un nuevo conjunto de datos, no es un arreglo peor puedo pasarlo a array, lo q hace set es q no se repitan los datos y con Array.from los convierto en un arreglo
