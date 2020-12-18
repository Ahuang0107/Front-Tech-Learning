let modules = require('./HashTable');

const hash=new modules.HashTable();
hash.put('Gandalf','gandalf@email.com');
hash.put('John','johnsnow@email.com');
hash.put('Tyrion','tyrion@email.com');

console.log(hash.hashCode('Gandalf')+' - Gandalf');
console.log(hash.hashCode('John')+' - John');
console.log(hash.hashCode('Tyrion')+' - Tyrion');
