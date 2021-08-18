var ChkArmStrong = function (Num) {
    var x = 0;
    var y = 0;
    var z = 0;
    var resNum = 0;
    x = Math.floor(Num / 100);
    y = Math.floor((Num / 10) % 10);
    z = Math.floor(Num % 10);
    resNum = (x * x * x) + (y * y * y) + (z * z * z);
    if (resNum === Num) {
        console.log(Num, "is Armstrong Number");
    }
    else {
        console.log(Num, "is not Armstrong Number");
    }
};
var num = 153;
ChkArmStrong(num);
