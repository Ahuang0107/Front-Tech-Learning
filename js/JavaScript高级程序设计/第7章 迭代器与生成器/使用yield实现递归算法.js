function* nTime(n){
    if(n>0){
        yield* nTime(n-1);
        yield n-1;
    }
}

for(const x of nTime(3)){
    console.log(x);
}
