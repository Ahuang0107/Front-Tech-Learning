console.log(/{\$.+?}/.test('{$A23}'))
console.log('{$A23}{$B14}'.match(/{\$.+?}/))
console.log(/{(\w+\s?)+}/.test('<H100>{CY|YYYY/12/31}公允价值'))
console.log(/{(CY|PY)\|.+?}/g.test('<H100>{CY|YYYY/12/31}公允价值'))
console.log('<H100>{CY|YYYY/12/31}公允价值'.match(/{(CY|PY)\|.+?}/g))


//通过在 *、+ 或 ? 限定符之后放置 ?，该表达式从"贪婪"表达式转换为"非贪婪"表达式或者最小匹配。
