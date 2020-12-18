const map=new Map();
map.set(1,1);
map.set(5,1);
map.set(8,1);
console.log(map);
map.set(1,map.get(1)+1);
console.log(map);
