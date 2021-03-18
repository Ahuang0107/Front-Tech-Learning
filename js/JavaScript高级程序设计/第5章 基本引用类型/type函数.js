class Person {
    constructor(name) {
        this.name = name;
    }
}

function type(obj, fullClass) {
    if (fullClass) {
        if (obj === null) {
            return '[Object Null]'
        } else {
            return Object.prototype.toString.call(obj)
        }
    }
}

let person = new Person('elase');
let normalPerson = 'frank';
let string = String('huang');
console.log(1..toString());
console.log(Object.prototype.toString.call(person));
console.log(Object.prototype.toString.call(normalPerson));
console.log(person.toString());
console.log(normalPerson.toString());
console.log(Object.prototype.toString.call(string));
