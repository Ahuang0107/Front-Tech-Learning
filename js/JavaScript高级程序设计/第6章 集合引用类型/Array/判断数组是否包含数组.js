let typeName=["doc", "dot"];
let fileTypes=["pdf", "xls", "xlsx", "doc", "docx"];
// Array.prototype.hasAny= function hasAny(arg) {
//     const array1=this;
//     for(const element of arg){
//         if(!array1.includes(element)){
//             return false;
//         }
//     }
//     return true;
// }
Array.prototype.hasAny = function hasAny(arg) {
    const array = this;
    if (typeof arg === 'string') {
        for (const y of array) {
            if (y === arg) {
                return true;
            }
        }
        return false;
    } else if (Array.isArray(arg)) {
        for (const x of arg) {
            for (const y of array) {
                if (y === x) {
                    return true;
                }
            }
        }
        return false;
    }
    return false;
}
console.log(fileTypes.hasAny(typeName));
