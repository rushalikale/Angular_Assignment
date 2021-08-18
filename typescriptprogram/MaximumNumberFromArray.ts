function MaximunArray(Arr : number[]) : number
{
    console.log("Array is =>", Arr);
    var ans : number = 0;
    ans = Arr[0];
    for(var i : number = 0; i < Arr.length ; i++){
        if(ans < Arr[i]){
            ans = Arr[i];
        }
      
    }
    return ans;
}

var arr1 : number[];
arr1 = [23, 89, 6, 29, 56, 45, 77, 32];
var max : number = 0;
max = MaximunArray(arr1);
console.log("Maximum Number from array is=>",max);

