function Area(Radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var ans = 0;
    ans = PI * Radius * Radius;
    return ans;
}
var r = 5;
var area = 0;
area = Area(r);
console.log("Area of circle is", area);
