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

// function SubType() {
//     SuperType.call(this);
// }
console.log(SuperType.prototype);
console.log(SubType.prototype);

let instance1 = new SubType();
instance1.name = 'abc';
instance1.colors = [];//直接赋值都会反映在实例上，会新建相应的对象覆盖继承的父类的对象
instance1.colors.push('black');//但是如果是对引用对象的修改，就会去修改继承的父类的对象，而这一行为会是共享的
console.log(instance1);

let instance2 = new SubType();
console.log(instance2);

let superType1 = new SuperType();
let superType2 = new SuperType();
superType1.colors.push('white');
console.log(superType1);
console.log(superType2);
