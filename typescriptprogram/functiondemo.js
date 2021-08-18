function Substraction(a, b) {
    return (a - b);
}
function Division(a, b) {
    return (a / b);
}
var div;
div = Division(10, 5);
var sub;
sub = Substraction(10, 5);
console.log("Division is=>", div);
console.log("Substraction is=>", sub);
function Maximum(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}
var max = Maximum(23, 89, 6);
console.log("Maximum numbder among three numbers", max);
function Area(r) {
    var pi = 3.14;
    return (pi * r * r);
}
var area;
area = Area(5);
console.log("Area of circle is=>", area);
function DisplayFactors(num) {
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            console.log("Factor of num is", i);
        }
    }
}
DisplayFactors(20);
