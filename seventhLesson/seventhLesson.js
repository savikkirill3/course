//1
function mul(a) {
    var mul = a;

    function f(b) {
        mul *= b;
        return f;
    }
    f.toString = function () {
        return mul;
    };
    return f;
}

alert(mul(2)(3)(4)(5));

//2
function sumStringArgs() {

    var Result = {
        count: 0,
        errStrings: []
    };

    for (var i = 0; i < arguments.length; i++) {
        if (parseInt(arguments[i])){
            Result.count += parseInt(arguments[i]);
        }else Result.errStrings.push(arguments[i]);
    }
return JSON.stringify(Result);
}
console.log(sumStringArgs(`dfgfdgfd`, `3`, `dg454`, `4dfsdf`));
console.log(sumStringArgs(`23dfdsf`, `45`, `ddfgfg54`));