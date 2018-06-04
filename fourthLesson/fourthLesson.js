
function isInArray(arr, el) {
   function isPositive(element) {
       return element == el;
   }
   return ( arr.some(isPositive));
}
isInArray([1, 2, 3 , '4', 'hello'], 'hello');



function modifyArr(arr, el, newEl){
    function isPositive(element) {
        return element == el;
    }
    if (arr.some(isPositive)) {
        arr.forEach(function (item, i, arr) {
            if (item == el) {
                arr[i] = newEl;
            }
        });
        return arr ;
    }else return ('element ' + el + ' not found in array ' + arr);
}

modifyArr([1,2,3,4,5], 5, `hello`);


function transformString(str, el, newEl){
var arr = str.toLowerCase().split(' ');
    function isPositive(element) {
        return element == el.toLowerCase();
    }
    if (arr.some(isPositive)) {
        arr.forEach(function (item, i, arr) {
            if (item == el.toLowerCase()) {
                arr[i] = newEl;
                str = arr.join(' ');
            }
        });
        return str ;
    }else return ('element ' + el + ' not found in array ' + str);
}

transformString(`my naMe is Alex`,`nAme`, `coolName`);
//выведет строку буквы в которой будут с нижнего регистра,
// я не знаю как оставить _И_мя с большой (нужно подумать) =)