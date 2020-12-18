function* innerGeneratorFn(){
    yield 'foo';
    return 'bar';
}

function* outerGeneratorFn(genObj){
    console.log('iter value',yield* innerGeneratorFn());
}
let x=outerGeneratorFn();
// console.log(x);//Object [Generator] {}
// console.log(x.next());//{ value: 'foo', done: false } \n iter value bar
// console.log(x.next());//{ value: undefined, done: true } \n iter value bar
for(const x of outerGeneratorFn()){
    console.log('value:',x);
}
// value: foo
// iter value bar
