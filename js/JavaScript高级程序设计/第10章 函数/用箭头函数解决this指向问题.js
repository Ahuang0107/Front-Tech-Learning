function Promise(executor) {
    this.PromiseSate = 'pending';
    this.PromiseResult = null;

    const resolve = (data) => {
        this.PromiseSate = 'resolved';
        this.PromiseResult = data;
    }

    // function resolve(data) {
    //     this.PromiseSate = 'resolved';//实际无法修改实例的指，因为执行器执行的是箭头函数，没有调用者对象。
    //     this.PromiseResult = data;
    // }

    function reject(data) {
        this.PromiseSate = 'rejected';
        this.PromiseResult = data;
    }

    executor(resolve, reject)
}

let p = new Promise((resolve, reject) => {
    // console.log(resolve.caller);
    resolve('ok');
})

console.log(p);
