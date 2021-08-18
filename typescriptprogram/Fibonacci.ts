function Fibonacci(Num : number) : void
{
    var fibonacciSerries : string = "";
    var i : number = 1;
    var j : number = 1;
    var ans : number = 0;
    fibonacciSerries = i + " " + j;
    for(var k : number = 1; k <= Num ; k++ )
    {
           if(ans < Num)
           {
            ans = i + j;
            fibonacciSerries = fibonacciSerries + " " +ans;
            i = j;
            j = ans;
           }
    }
    console.log("Fibonacci serries of Number",fibonacciSerries);
}


var num : number = 21;
Fibonacci(num);