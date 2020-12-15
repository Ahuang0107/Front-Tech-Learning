function Person(){}
console.log(typeof Person.prototype);
console.log(Person.prototype);
console.log(Person.prototype.constructor===Person);
console.log(Person.prototype.__proto__);

Person.prototype.name='hxh';
Person.prototype.age=22;
let person1=new Person();
person1.age=21
// console.log(Object.getOwnPropertyDescriptor(person1));
// console.log(Object.getOwnPropertyDescriptor(Person.prototype));
// console.log(Object.getOwnPropertyDescriptor(Person));
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
console.log(Object.keys(person1));
