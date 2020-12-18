"use strict";

const m=new Map();
m.set(NaN,'foo').set(+0,'bar');

console.log(m.get(NaN));
console.log(m.get(-0));

const map=new Map([
    ["key1","val1"],
    ["key2","val2"],
    ["key3","val3"],
]);
for(let pair of map[Symbol.iterator]()){
    console.log(pair);
}

for(let value of map.values()){
    console.log(value);
}
