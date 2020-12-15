/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    let colLength = A.length,
        rowLength = A[0].length;
    let B = [];
    if (colLength === rowLength) {
        for (let i = 0; i < colLength; i++) {
            for (let j = i + 1; j < colLength; j++) {
                [A[i][j], A[j][i]] = [A[j][i], A[i][j]];
            }
        }
        return A;
    } else {
        for (let i = 0; i < rowLength; i++) {
            B[i] = [];
            for (let j = 0; j < colLength; j++) {
                B[i].push(A[j][i]);
            }
        }
        return B;
    }
};
let test = [];
test.push([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
test.push([[1,2,3],[4,5,6]]);
test.push([[1,2],[3,4],[5,6]]);

for(const value of test){
    console.log(transpose(value));
}
