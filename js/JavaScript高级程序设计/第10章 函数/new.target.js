function King(){
    if(!new.target){
        throw 'King must be instantiated using "new"'
    }
    console.log('King instantiated using "new"');
    console.log(new.target);
}
new King();
King();
