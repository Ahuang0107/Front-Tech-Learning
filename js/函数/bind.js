const modules = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

const unboundGetX = modules.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
console.log(unboundGetX.name);
// expected output: undefined
// console.log(modules.getX());
// expected output: 42

// const boundGetX = unboundGetX.bind(modules);
// console.log(boundGetX());
// expected output: 42
console.log(unboundGetX.bind(modules)());
console.log(unboundGetX.bind(modules).name);
// expected output: 42
