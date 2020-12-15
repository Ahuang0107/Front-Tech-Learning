/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let top=0,button=matrix.length-1;
    while(top<button){
        [matrix[top],matrix[button]]=[matrix[button],matrix[top]];
        top++;
        button--;
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=i+1;j<matrix.length;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
        }
    }
    // return matrix;
};
let test = [];
test.push([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]);
test.push([
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
]);

for (const value of test) {
    console.log(rotate(value));
}
