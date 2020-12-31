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
    const _this = this;
    //判断回调函数参数
    if (typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason;
        }
    }
    if (typeof onResolved !== 'function') {
        onResolved = value => value;
    }
    return new Promise((resolve, reject) => {
        //封装函数
        function callback(type) {
            try {
                //获取回调函数的执行结果
                let result = type(_this.PromiseResult);
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v);
                    }, r => {
                        reject(r);
                    })
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e);
            }
        }

        //调用回调函数
        if (this.PromiseSate === 'resolved') {
            callback(onResolved);
        }
        if (this.PromiseSate === 'rejected') {
            callback(onRejected);
        }
        if (this.PromiseSate === 'pending') {
            //需要保存回调函数,等到状态确定后再调用
            this.callbacks.push({
                onResolved: function () {
                    callback(onResolved);
                },
                onRejected: function () {
                    callback(onRejected);
                }
            });
        }
    })
}

Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
}

module.exports = {Promise};
