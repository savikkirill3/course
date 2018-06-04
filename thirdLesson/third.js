
function count(str, I) {

    var pos = 0, a = 0;
    while (true) {
        var foundPos = str.indexOf(I, pos);
        if (foundPos == -1) break;
        a++;
        pos = foundPos + 1; // продолжить поиск со следующей
    }
    return a;
}

function pow(x, n){
    return Math.pow(Math.round(x), Math.round(n));
}

function checkingComb(str, comb){
    var str = str.toLowerCase(), comb = comb.toLowerCase();
    var pos = str.indexOf(comb, 0);
    if (pos >= 0){
        return true;
    } else {
        return false;
    }

}
count('we are future developers', 'e');
pow(2.5, 3.3);
checkingComb(`my naMe is Alex`,`name`);
checkingComb(`my sUrNaMe is Ivanov`,`SURNAME`);
checkingComb(`my sUrNaMe is Ivanov`,`SIRNAMES`);
