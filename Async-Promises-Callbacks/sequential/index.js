const {taskOne, taskTwo} = requiere ('./task')



async function main(){
    console.time('Measuring time');
    const valueOne = taskOne();
const valueTwo = taskTwo();
console.timeEnd('Meaasuring time');

console.log('Task One returned', valueOne);
console.log('Task Two returned', valueTwo);
}

//entre consolo.time y console.timeEnd para controlar el timepo que tarda en 