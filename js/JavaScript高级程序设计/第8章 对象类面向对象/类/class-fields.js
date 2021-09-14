class User {
    name = "John"

    sayHi() {
        console.log(this.name)
    }
}

new User().sayHi()
let user = new User()
user.sayHi()

class Button {
    constructor(value) {
        this.value = value
    }

    click() {
        console.log(this.value)
    }
}

let button = new Button("hello")

// 这里只传入了class Button的click function,但是callback的时候caller并不是button
// 但是为什么使用箭头函数就可以解决这个问题
setTimeout(button.click, 1000)
