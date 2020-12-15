function object(o){
    function F(){}
    F.prototype=o;
    return new F();
}

let person={
    name:'Nicholsa',
    friends:['Shelby','Court','Van']
};

let anotherPerson=object(person);
anotherPerson.name='Greg';
anotherPerson.friends.push('Rob');
console.log(anotherPerson);

let yetAnotherPerson=object(person);
yetAnotherPerson.name='Linda';
yetAnotherPerson.friends.push('Barbie');
console.log(yetAnotherPerson);

console.log(person);
