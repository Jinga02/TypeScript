/** @format */
function fetchPost() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // resolve({
            //   name: "진재환",
            //   age: 12,
            // });
            reject("풉ㅋ풉ㅋ");
        }, 2000);
    });
}
fetchPost()
    .then(function (res) {
    console.log(res);
})
    .catch(function (err) {
    console.log(err);
});
