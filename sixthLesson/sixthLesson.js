
const array = [[1,2,3], true, null, 123, {"a": "b","c": "d","e": "f"}];

function tryToParseJSON(arr) {

    var massJSON = [];
    array.forEach(function (item) {
        massJSON.push(JSON.stringify(item))
    });
    return massJSON;
}
setTimeout(function () {

   console.log(tryToParseJSON(array))

}, 5000);
