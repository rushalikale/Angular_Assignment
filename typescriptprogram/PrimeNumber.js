//Prime Number
function ChkPrime(Num) {
    var flag = false;
    for (var i = 2; i < Num / 2; i++) {
        if (Num % i === 0) {
            flag = true;
            break;
        }
    }
    if (Num > 1) {
        return flag;
    }
    else {
        flag = true;
        return flag;
    }
}
var num = 11;
var result;
result = ChkPrime(num);
if (result === true) {
    console.log(num, "is not prime");
}
else {
    console.log(num, "is Prime");
}
