class Vehicle{
    constructor(){
        console.log(new.target);
        if(new.target===Vehicle){
            throw new Error('Vehicle cannot be directly instantiated');
        }
        if(!this.foo){
            throw new Error('Inheriting class must define foo()');
        }
        console.log('success!');
    }
}
class Bus extends Vehicle{
    foo(){}
}

class Van extends Vehicle{
}

new Bus();
new Van();
new Vehicle();
