let modules=require('./Promise');

let p=new modules.Promise((resolve, reject) => {
    resolve('OK');
});

const res = p.then().then(value=>{
    console.log(value);
}).then(value=>{
    console.log(233);
}).then(value=>{
    console.log(344);
}).catch(reason=>{
    console.warn(reason);
});

console.log(res);
