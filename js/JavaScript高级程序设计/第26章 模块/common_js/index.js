/**
 * CommonJS 直接使用引入的内容（调用require()意味着模块会原封不动地加载进来）
 */
console.log(require('./package/moduleA'))

/**
 * CommonJS 把模块赋值给变量
 * @type {{module: string}|{module?: string}}
 */
const moduleB = require('./package/moduleB');
console.log(moduleB)

/**
 * CommonJS 无论一个模块在require()中被引用了多少次，模块永远是单例
 * @type {{name: string}|{name?: string}}
 */
const a1 = require('./package/moduleC')
const a2 = require('./package/moduleC')
console.log(a1 === a2)
