function Area(Radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var ans = 0;
    ans = PI * Radius * Radius;
    return ans;
}
var no = 10.2;
var area = 0;
area = Area(no);
console.log("Ares is ", area);
function fun(name, passport, nationality) {
    if (nationality === void 0) { nationality = "Indian"; }
    console.log("Name is", name);
    if (passport == undefined) {
        console.log("Sorry I dont have passport");
    }
    else {
        console.log("Passport no is", passport);
    }
    console.log("Nationality is ", nationality);
}
fun("Rushali", 1000);
function demo() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log(data);
}
demo();
