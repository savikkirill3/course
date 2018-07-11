
const array = [[1,2,3], true, null, 123, {"a": "b","c": "d","e": "f"}, this];

function tryToParseJSON(arr) {

    var massJSON = [];
    array.forEach(function (item) {
        try {
            massJSON.push(JSON.stringify(item))
        }
        catch (e) {
            massJSON.push('Ошибка ' + e.name + ":" + e.message);
        }
    });
    return massJSON;
}
setTimeout(function () {

   tryToParseJSON(array);

}, 5000);
