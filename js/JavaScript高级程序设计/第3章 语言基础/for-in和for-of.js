const obj = {
    name: 'hxh',
    age: 22,
    sex: "male",
    0: 0
}
const array = [1, 2, 3, 4, 5];
for (const property in obj) {//const声明并不是必须的,用来限定作用域与确保不被修改
    console.log(property);
}
// console.log(property);//ReferenceError: property is not defined

for (const property in array) {
    console.log(property);
}

// for(const item of obj){//TypeError: obj is not iterable
//     console.log(item);
// }
for (const item of array) {
    console.log(item);
}
