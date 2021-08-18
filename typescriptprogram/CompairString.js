function ChkString(Str) {
    var chkStr = "Marvellous";
    var resStr = "";
    for (var i = 0; i < chkStr.length; i++) {
        for (var j = 0; j < Str.length; j++) {
            if (chkStr[i] === Str[j]) {
                resStr = resStr + chkStr[i];
                break;
            }
        }
    }
    if (resStr === chkStr) {
        console.log("string contains", resStr, " in it");
    }
    else {
        console.log(chkStr, " word not Found");
    }
}
var str = "Pune Kothrud Marvellous Infosystem";
ChkString(str);
