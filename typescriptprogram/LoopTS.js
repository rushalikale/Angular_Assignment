var i = 1;
var j = 1;
var num = 3;
do {
    console.log("Using Do while", i);
    i++;
} while (i <= num);
while (j <= num) {
    console.log("Using while=>", j);
    j++;
}
var arr = [10, 20, 30];
arr.push(40);
arr.push(50);
arr[4] = 60;
arr[1] = 90;
console.log("Constant array is", arr);
