// Maximum number among three Numbres
function Maximum(Num1, Num2, Num3) {
    var maxNum = 0;
    if (Num1 > Num2 && Num1 > Num3) {
        maxNum = Num1;
    }
    else if (Num2 > Num1 && Num2 > Num3) {
        maxNum = Num2;
    }
    else {
        maxNum = Num3;
    }
    return maxNum;
}
var i = 23;
var j = 89;
var k = 6;
var maximumNumber = 0;
maximumNumber = Maximum(i, j, k);
console.log("Maximum Number among three number is", maximumNumber);
