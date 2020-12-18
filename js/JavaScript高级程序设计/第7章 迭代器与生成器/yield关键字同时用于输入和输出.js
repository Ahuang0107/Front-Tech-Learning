function* generatorFn(initial){
    console.log(initial);
    console.log(yield);
    console.log(yield);
}
let generatorObject=generatorFn('foo');
generatorObject.next('bar');
generatorObject.next('baz');
generatorObject.next('qux');
