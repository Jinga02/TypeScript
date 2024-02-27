/** @format */
function replace(text) {
    if (typeof text === "string") {
        var newText = text.replace(/ /g, "");
        return newText;
    }
    else {
        return alert("놉!");
    }
}
var result = replace("아 하 아");
console.log(result);
