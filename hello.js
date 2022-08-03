function sayHello(person) {
    return 'Hello' + person;
}
// console.log(sayHello([123]))
// 原始数据类型
var isDnoe = false;
console.log(isDnoe);
// let createdByNewBoolean: boolean = new Boolean(true)
// console.log(createdByNewBoolean)
var count = 100;
console.log(count);
var str = 'string';
var templateStr = "hello,".concat(str);
console.log(str);
console.log(templateStr);
var _null = null;
var _undefined = undefined;
console.log(_null, _undefined);
// let sum = 0
// sum = '123'
var some;
some = 120;
some = '123';
var unionTypes;
unionTypes = 'str';
// unionTypes = false
unionTypes.length;
unionTypes = 123;
var tom = {
    name: 'tom',
    hobby: 'ok',
    id: 100
};
var numarr = [{ name: 'jogn', id: 1 }];
// numarr.push('1')
console.log(numarr);
var personArr = [{ name: 'li', id: 1 }];
var anyArr = [1, {}, '2', false];
function sum(x, y) {
    return x + y;
}
var sums = function (x, y) {
    return 1;
};
var mySum = function (x, y) {
    return 1;
};
var mySearch = function (source, substring) {
    return source.indexOf(substring) === -1;
};
function getName(firstName, lastName, thirdName) {
    if (lastName) {
        return firstName + lastName + thirdName;
    }
    else {
        return firstName;
    }
}
getName('张', '三', 's');
function buildName(last, first) {
    if (last === void 0) { last = '史密斯'; }
    return first + last;
}
function push(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log(arr, rest);
}
push([1, 2, 3], 'a', 'b', 'c');
var Week;
(function (Week) {
    Week[Week["one"] = 0] = "one";
    Week[Week["two"] = 1] = "two";
    Week[Week["three"] = 2] = "three";
    Week[Week["four"] = 3] = "four";
})(Week || (Week = {}));
console.log(Week['0'] === 'one');
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is ".concat(this.name);
    };
    return Animal;
}());
var a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
