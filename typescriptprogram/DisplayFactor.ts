//Display Factors of Number
function DisplayFactor(Num : number) : void 
{
    var dispFact : string = "";
    for(var i : number = 0; i < Num ; i++)
    {
        if(Num % i === 0)
        {
            dispFact = dispFact+" "+i;
        }
    }
    console.log("Factors of Number are", dispFact);
}

var i : number = 20;
DisplayFactor(i);
