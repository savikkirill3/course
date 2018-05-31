// #1
function mid(a, b) {
    let c = (a + b)/2;
    console.log(c);
}
mid(5, 10);

//#2
function pow(x, n){
    let m = 1;
    while(n > 0){
        m *= x;
        n--;
    }
    console.log(m);
}
pow(2, 3);

//#3
/*const questionFunc = () => {
    var a = +prompt('a?', '');
    switch (a) {
        case 0: alert( 0 );
        case 1: alert( 1 );
        case 2: alert( '2,3' );
        case 3: alert( '2,3' );
    }
}
questionFunc();
*/

//#4
function loopWhile(a, b) {
    while (b > a ) {
        a++;
        console.log(a);
        a++;
    }
}
loopWhile(2, 10);

function loopDoWhile(a, b) {
    do{
        a++;
        console.log(a);
        a++;
    } while ( b > a);
}
loopDoWhile(2, 10);

function For(a, b) {
    for(a; b > a; a++){
        a++;
        console.log(a);
    }
}
For (2, 10);