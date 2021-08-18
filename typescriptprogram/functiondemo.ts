function Substraction(a:number , b:number):number{
    return(a-b);
}

function Division(a : number, b : number) : number{
    return(a/b);

}

var div : number;
div = Division(10,5);


var sub : number;
sub = Substraction(10,5);

console.log("Division is=>",div);
console.log("Substraction is=>",sub);


function Maximum(a:number,b:number,c:number):number{
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}

var max = Maximum(23,89,6);
console.log("Maximum numbder among three numbers",max);

function Area(r:number):number{
    var pi :number = 3.14;
    return(pi*r*r);
}

var area :number;
area = Area(5);
console.log("Area of circle is=>",area);

function DisplayFactors(num:number): void{
    for(var i =1;i<num;i++){
        if(num%i === 0){
            console.log("Factor of num is",i);
        }
    }
}

DisplayFactors(20);

