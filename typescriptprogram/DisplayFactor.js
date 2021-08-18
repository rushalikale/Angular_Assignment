//Display Factors of Number
function DisplayFactor(Num) {
    var dispFact = "";
    for (var i = 0; i < Num; i++) {
        if (Num % i === 0) {
            dispFact = dispFact + " " + i;
        }
    }
    console.log("Factors of Number are", dispFact);
}
var i = 20;
DisplayFactor(i);
