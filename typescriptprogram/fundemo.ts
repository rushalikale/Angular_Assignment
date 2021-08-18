function Area(Radius :number,PI : number = 3.14)
{
    var ans :number = 0;
    ans= PI*Radius*Radius;
    return ans
}

var no : number = 10.2;
var area : number =0;
area = Area(no);
console.log("Ares is ",area);

function fun(name:string,passport?,nationality="Indian")
{

    console.log("Name is",name);
    if(passport == undefined){
        console.log("Sorry I dont have passport");
    }else{
        console.log("Passport no is",passport);
    }
    console.log("Nationality is ",nationality);
}

fun("Rushali",1000);

function demo(...data:number[]){
    console.log(data);
}
demo();