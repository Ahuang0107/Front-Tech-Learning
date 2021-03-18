let CreateSingleton = (() => {
    let instance = null;
    return function (name) {
        this.name = name;
        if (instance) {
            return instance;
        }
        return instance = this;
    }
})()

CreateSingleton.prototype.getName = function () {
    console.log(this.name);
}

let instance = new CreateSingleton('elena');
instance.getName();

let anotherInstance = new CreateSingleton('elase');
anotherInstance.getName();
