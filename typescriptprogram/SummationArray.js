function Summation(Arr) {
    console.log("Array is =>", Arr);
    var ans = 0;
    for (var i = 0; i < Arr.length; i++) {
        ans = ans + Arr[i];
    }
    return ans;
}
var arr1;
arr1 = [23, 6, 7, 4, 5, 7];
var sum = 0;
sum = Summation(arr1);
console.log("Summation of array element is=>", sum);
