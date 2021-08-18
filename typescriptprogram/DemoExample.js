var Display = function () {
    var arr1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr1[_i] = arguments[_i];
    }
    console.log("arr", arr1);
};
var Lambda = function (x) { return x + 1; };
console.log("Lambda function", Lambda(100));
var Add = function (a, b) {
    return a + b;
};
function ArraySort(Arr) {
    console.log("Ärray is", Arr);
    var temp = 0;
    for (var i = 0; i < Arr.length; i++) {
        for (var j = i + 1; j <= Arr.length; j++) {
            if (Arr[i] >= Arr[j]) {
                temp = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = temp;
            }
        }
    }
    console.log("Sorted Array is", Arr);
}
Display("Hi", "Hello");
Display("PPA", "Python", "Angular");
console.log("Add function by Anonymous function", Add(10, 20));
ArraySort(new Array(10, 5, 3, 2, 15, 7));
var Character = /** @class */ (function () {
    function Character(fname, lname) {
        this.fullname = "";
        this.fullname = fname + " " + lname;
    }
    Character.prototype.greet = function (name) {
        if (name) {
            console.log("Hey Hi,", name, " my fullname is", this.fullname);
        }
        else {
            console.log("Hi my full name is", this.fullname);
        }
    };
    return Character;
}());
var obj = new Character("Rushali", "Kale");
obj.greet();
console.log("Obj", obj);
var msg = obj.greet("Dr Ramesh");
//String Concept
var str = new String("Marvellous");
var ptr = new String("Infosystems");
//charAt() returns character at specific index
console.log("str.charAt(0)=>", str.charAt(0));
console.log("ptr.charAt(1)=>", ptr.charAt(1));
//charCodeAt() return unicode of character at specific index
console.log("str.charCodeAt(0)", str.charCodeAt(0));
console.log("ptr.charCodeAt(1)", ptr.charCodeAt(1));
//length() return length of string
console.log("Length od str", str.length);
console.log("Length of ptr", ptr.length);
//create object of string class as
var strNew = "Marvellous";
var ptrNew = "Infosystems";
//concat() is used to concat two string
var final = strNew.concat(ptrNew);
console.log("String after concat()", final);
//indexOf() is used to find out specific index of substring in string
var indexOfSubstring = strNew.indexOf("vel");
console.log("index od substring in string", indexOfSubstring, ptrNew.indexOf("Pune"));
//lastIndexOf() is used to return last index of specific substring in string
var strN = "Marvellous Infosystem Marvellous Pune And Nashik";
console.log("Last index of Marvellous in StrN", strN.lastIndexOf("Marvellous"));
//replace() is used to replace substring with another substring
var replace = /Mumbai/gi;
console.log("replace()=>", strN.replace(replace, "NewMarvellous"));
//search metheod is used to find out specific substring ids present or not'
if (strN.search(replace) === -1) {
    console.log(replace, " is not present");
}
else {
    console.log(replace, " is present");
}
//split() is used to break string with specific delimeter
var arr = strN.split(" ", 2);
console.log("split()=>", arr);
//toString() is used  to convert any datatype to string
var num = 11233;
console.log("toString", num.toString(), typeof num.toString());
