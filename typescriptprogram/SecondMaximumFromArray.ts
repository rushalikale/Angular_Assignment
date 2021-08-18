function MaximunArray(Arr : number[]) : number
{
    console.log("Array is =>", Arr);
    var ans1 : number = 0;
    var ans2 : number = 0;
    ans1 = Arr[0];
    ans2 = Arr[0];
    for(var i : number = 0; i < Arr.length ; i++){
        if(ans1 < Arr[i]){
            ans2 = ans1;
            ans1 = Arr[i];
        }else if(ans2 < Arr[i] && ans1 > Arr[i]){
            ans2 = Arr[i];
        }
      
    }
    return ans2;
}

var arr1 : number[];
arr1 = [23, 89, 6, 29, 56, 45, 77, 32];
var max : number = 0;
max = MaximunArray(arr1);
console.log("Second Maximum Number from array is=>",max);

