/**
 * @author Nikita Amar <amarnikita09@gmail.com>
 * @version: '01.0.0',
 * @param {number} n
 * @return {number}
 */
 
function detect_duplicate(N) {
    let myFunc = num => Number(num);
    var intArr = Array.from(String(N), myFunc);
    for (var i = 0; i < intArr.length; i++) {
        for (var j = i; j < intArr.length; j++) {
            if (i !== j && intArr[i] === intArr[j]) {
                return true;
            }
        }
    }
    return false;
}
var numDupDigitsAtMostN = function (N) {
    result = 0;
    for (var i = 10; i <= N; i++) {
        if (detect_duplicate(i)) {
            result++;
        }
    }
    return result;
};

