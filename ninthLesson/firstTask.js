function getElementsById(id) {
    var elem = document.getElementById(id).getElementsByTagName('*');
    var obj = {};
    for (var i = 0; i < elem.length; i++) {
        var str = elem[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}
alert(getElementsById('id'));