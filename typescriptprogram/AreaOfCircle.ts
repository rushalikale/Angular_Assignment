//Area of Circle

function Area(Radius : number , PI : number = 3.14) : number
{
    var ans : number = 0;
    ans = PI*Radius*Radius;
    return ans;
}

var r : number = 5;
var area : number = 0;
area = Area(r);
console.log("Area of circle is",area);