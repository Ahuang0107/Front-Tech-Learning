function SuperType(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName=function (){
    console.log(this.name);
}

function SubType(name,age) {
    SuperType.call(this,name);
    this.age=age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge=function(){
    console.log(this.age);
}

let instance1=new SubType('Nicholas',29);
let superType=new SuperType('Jack');
instance1.colors.push('black');
console.log(instance1);
console.log(superType);
