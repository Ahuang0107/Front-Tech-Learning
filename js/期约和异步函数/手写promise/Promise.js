function Promise(executor) {
    this.PromiseSate = 'pending';
    this.PromiseResult = null;
    const _this = this;
    this.callbacks = [];

    function resolve(data) {
        if (_this.PromiseSate !== 'pending') return;
        //1. 修改对象的状态(promiseState)
        _this.PromiseSate = 'resolved'
        //2. 修改对象的结果值(promiseResult)
        _this.PromiseResult = data;
        _this.callbacks.forEach(item => {
            item.onResolved(data);
        });
    }

    function reject(data) {
        if (_this.PromiseSate !== 'pending') return;
        //1. 修改对象的状态(promiseState)
        _this.PromiseSate = 'rejected'
        //2. 修改对象的结果值(promiseResult)
        _this.PromiseResult = data;
        _this.callbacks.forEach(item => {
            item.onRejected(data);
        });
    }

    try {
        //同步调用执行器函数
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onResolved, onRejected) {
    //调用回调函数
    if (this.PromiseSate === 'resolved') {
        onResolved(this.PromiseResult)
    }
    if (this.PromiseSate === 'rejected') {
        onRejected(this.PromiseResult)
    }
    if (this.PromiseSate === 'pending') {
        //需要保存回调函数,等到状态确定后再调用
        this.callbacks.push({
            onResolved: onResolved,
            onRejected: onRejected
        });
    }
}
