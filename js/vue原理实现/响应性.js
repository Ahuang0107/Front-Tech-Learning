//通过固定的set方法修改数据，然后在set方法中调用方法重新渲染视图。

function convert(obj) {
    Object.keys(obj).forEach(key => {
        let internalValue = obj[key];//这是什么，引用吗？？？？？？
        Object.defineProperty(obj, key, {
            get() {
                console.log(`getting key "${key}" : ${internalValue}`);
                return internalValue;
            },
            set(newValue) {
                console.log(`setting key "${key}" to: ${newValue}`);
                internalValue = newValue;
            }
        })
    })
}

const obj = {
    foo: 123,
    bar: 234
}
convert(obj)
obj.foo // 需要打印: 'getting key "foo": 123'
obj.bar
obj.foo = 234 // 需要打印: 'setting key "foo" to 234'
obj.bar = 789
obj.foo // 需要打印: 'getting key "foo": 234'
obj.bar
