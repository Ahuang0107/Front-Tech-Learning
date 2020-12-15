function typedArrayConcat(typedArrayConstructor, ...typedArrays) {
    const numElements = typedArrays.reduce((prev, cur) => {
        // console.log(prev.length);
        return (prev.length || prev) + cur.length
    })
    const resultArray = new typedArrayConstructor(numElements);
    let currentOffset = 0;
    typedArrays.map(x => {
        resultArray.set(x, currentOffset);
        currentOffset += x.length;
    });
    return resultArray;
}

const concatArray = typedArrayConcat(Int32Array, Int8Array.of(1, 2, 3),
    Int16Array.of(4, 5, 6, 7), Float32Array.of(8, 9, 10, 11, 12));
console.log(concatArray);
console.log(concatArray instanceof Int32Array);
