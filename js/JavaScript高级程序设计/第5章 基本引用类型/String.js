let name2 = new String('mstt');
name2.age=27;
name2.sex='male';
let name3 = 'mstt';
console.log(name2);//[String: 'mstt'] { age: 27, sex: 'male' }
console.log(name3);//mstt

let obj1={};
let obj2=obj1;
obj1.name='Nicholas';
console.log(obj1);//{ name: 'Nicholas' }
console.log(obj2);//{ name: 'Nicholas' }

function setName(obj){
    obj.name='Nicholas';
    obj=new Object();
    obj.name='Greg';
}
let person=new Object();
setName(person);
console.log(person);//console.log(person);//

// function buildUrl(){
//     let qs="?debug=true";
//     with(loaction){
//         let url=href+qs;
//     }
//     return url;
// }
