function MyObject(){
    this.name='name';
    let privateVariable=10;
    function privateFunction(){
        return false;
    }
    this.publicMethod=function(){
        privateVariable++;
        return privateFunction();
    }
}

const myObject=new MyObject();
const myObject2=new MyObject();
// console.log(myObject.name);//name
console.log(myObject.publicMethod());//false
// console.log(myObject.name===myObject2.name);//true
// console.log(myObject.publicMethod()===myObject2.publicMethod());//true
