function* generatorFn(){
    console.log('02');
    yield 1;
    console.log('04');
    yield 2;
    console.log('06');
    yield 3;
}
console.log('00');
let generatorObject=generatorFn();
console.log('01');
console.log(generatorObject.next());
console.log('03');
console.log(generatorObject.next());
console.log('05');
console.log(generatorObject.next());
