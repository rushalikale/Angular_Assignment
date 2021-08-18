// Maximum number among three Numbres

function Maximum(Num1 : number , Num2 : number , Num3 : number) : number
{
    var maxNum : number = 0;
    if(Num1 > Num2 && Num1 >Num3)
    {
        maxNum = Num1;
    }else if(Num2 > Num1 && Num2 >Num3)
    {
        maxNum = Num2;
    }else
    {
        maxNum = Num3;
    }
    return maxNum;
}

var i : number = 23;
var j : number = 89;
var k : number = 6;

var maximumNumber : number = 0;
maximumNumber = Maximum(i,j,k);
console.log("Maximum Number among three number is", maximumNumber);
