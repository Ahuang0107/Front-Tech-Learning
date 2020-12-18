function* generatorFn(){
    console.log('iter value:',yield* [1,2,3]);
}

for(const x of generatorFn()){
    console.log('value',x);
}
// value 1
// value 2
// value 3
// iter value: undefined

// 一开始每次遇到yield*都返回后面可迭代对象中的一个值，等到可迭代对象遍历完了，就可以确定yield*的值了（由于可迭代对象没有
// 返回值，所以是undefined），然后执行卡在的行语句。
