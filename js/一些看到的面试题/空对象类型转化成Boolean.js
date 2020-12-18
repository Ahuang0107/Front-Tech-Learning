if([]){
    console.log('空数组是true');
}else{
    console.log('error');
}

if({}){
    console.log('空对象是true');
}else{
    console.log('error');
}

if([]===true){
    console.log('error');
}else{
    console.log('全等了，[]就不能转换成true了');
}
