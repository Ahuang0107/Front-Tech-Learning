const modules = {
    x: 42,
    getX: function() {
        console.log(this)
        return this.x;
    }
};
x=24;

const unboundGetX = modules.getX;
// console.log(unboundGetX()); // expected output: Object [global]{} 24
// console.log(unboundGetX.name); // expected output: getX

const boundGetX = unboundGetX.bind(modules);
// console.log(boundGetX()); // expected output: { x: 42, getX: [Function: getX] } 42

// console.log(boundGetX.name);
// expected output: bound getX
