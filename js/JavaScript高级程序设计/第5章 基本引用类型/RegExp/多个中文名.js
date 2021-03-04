let pattern=/[\u4e00-\u9fa5;；,，、]/g

console.log(pattern.test("中文名;中文名，中文名；中文名、中文名,中文名"))
