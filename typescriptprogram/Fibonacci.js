function Fibonacci(Num) {
    var fibonacciSerries = "";
    var i = 1;
    var j = 1;
    var ans = 0;
    fibonacciSerries = i + " " + j;
    for (var k = 1; k <= Num; k++) {
        if (ans < Num) {
            ans = i + j;
            fibonacciSerries = fibonacciSerries + " " + ans;
            i = j;
            j = ans;
        }
    }
    console.log("Fibonacci serries of Number", fibonacciSerries);
}
var num = 21;
Fibonacci(num);
