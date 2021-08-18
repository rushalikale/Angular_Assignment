function MaximunArray(Arr) {
    console.log("Array is =>", Arr);
    var ans = 0;
    ans = Arr[0];
    for (var i = 0; i < Arr.length; i++) {
        if (ans < Arr[i]) {
            ans = Arr[i];
        }
    }
    return ans;
}
var arr1;
arr1 = [23, 89, 6, 29, 56, 45, 77, 32];
var max = 0;
max = MaximunArray(arr1);
console.log("Maximum Number from array is=>", max);
