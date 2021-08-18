function Summation(Arr : number[]) : number
{
    console.log("Array is =>", Arr);
    var ans :number = 0;
    for(var i : number =0; i < Arr.length ; i++){
        ans = ans + Arr[i];
    }
    return ans;
}

var arr1 : number[];
arr1 = [23, 6, 7, 4, 5, 7];
var sum : number = 0;

sum = Summation(arr1);
console.log("Summation of array element is=>",sum);

