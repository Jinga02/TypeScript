/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHi = function () {
        console.log("".concat(this.name, "\uC544 \uC548\uB155!"));
    };
    return User;
}());
var user1 = new User("재환", 27);
user1.sayHi();
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, skills) {
        var _this = _super.call(this, name, age) || this;
        _this.skills = skills;
        return _this;
    }
    Developer.prototype.saySkills = function () {
        console.log("$\uB09C ".concat(this.skills, " \uC0AC\uC6A9 \uD560 \uC904 \uC5481\u314F"));
    };
    return Developer;
}(User));
var developer1 = new Developer("재환", 27, ["javascript", "typescript"]);
developer1.saySkills();
