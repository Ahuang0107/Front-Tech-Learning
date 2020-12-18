let p=new Promise((resolve,reject)=>{
    setTimeout(reject,10000)
});
setTimeout(console.log,0,p);
setTimeout(console.log,11000,p);
