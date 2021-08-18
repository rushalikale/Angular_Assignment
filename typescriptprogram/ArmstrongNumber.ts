var ChkArmStrong = (Num : number)=>
{
    var x : number = 0;
    var y : number = 0;
    var z : number = 0;
    var resNum : number = 0;

    x = Math.floor(Num/100);
    
    y = Math.floor((Num/10)%10);
    
    z = Math.floor(Num%10);

    resNum = (x*x*x)+(y*y*y)+(z*z*z);

    if(resNum === Num){
        console.log(Num,"is Armstrong Number");
    }else{
        console.log(Num,"is not Armstrong Number");
    }

}

var num : number = 153;
ChkArmStrong(num);