//Array examples
var arr1;
arr1 = [1, 2, 3, 4, 5];
var arr2 = [11, 21, 31, 42];
var arr3 = new Array();
arr3 = [1, 2, 3, 4];
arr3.pop();
arr3.push(5);
for (var i = 0; i < arr3.length; i++) {
    console.log("array of number is", arr3[i]);
}
console.log(arr3);
var arr4 = new Array();
arr4 = ["PPA", "Angular", "Python", "Logic Building"];
for (var i = 0; i < arr4.length; i++) {
    console.log("Array of string is", arr4[i]);
}
//touples examples
var touples1 = ["Hi", 2, true, "India"];
console.log("touples=>", touples1);
console.log("touple length", touples1.length);
touples1.pop();
touples1.push(11);
console.log("touples=>", touples1);
var tp2 = ["India is my country", 10, false];
tp2.push("Shree Ganesha");
console.log("Touple 2", tp2, tp2.length);
