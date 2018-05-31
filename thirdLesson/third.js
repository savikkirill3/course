
function count(str, I) {

    var pos = 0, a = 0;
    while (true) {
        var foundPos = str.indexOf(I, pos);
        if (foundPos == -1) break;
        a++;
        pos = foundPos + 1; // продолжить поиск со следующей
    }
    console.log(a);
    return a;
}

function pow(x, n){
    x = Math.round(x);
    n = Math.round(n);
    var result = Math.pow(x, n);
    console.log(result);
    return result;
}

function checkingComb(str, comb){
    var str = str.toLowerCase(), comb = comb.toLowerCase();
    var pos = str.indexOf(comb, 0);
    if (pos >= 0){
        console.log('true');
    } else {
        console.log('false');
    }

}
count('we are future developers', 'e');
pow(2.5, 3.3);
checkingComb(`my naMe is Alex`,`name`);
checkingComb(`my sUrNaMe is Ivanov`,`SURNAME`);
checkingComb(`my sUrNaMe is Ivanov`,`SIRNAMES`);
