var i: number = 1;
var j: number = 1;
var num : number = 3;

do{
    console.log("Using Do while",i);
    i++;
}while(i<=num);

while(j<=num){
    console.log("Using while=>",j);
    j++;
}

const arr : number[] = [10,20,30];

arr.push(40);
arr.push(50);
arr[4] = 60;
arr[1] = 90;

console.log("Constant array is",arr);
arr.pop();

