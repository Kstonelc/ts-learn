"use strict";
let a;
let b;
let c;
// a = 9;
a = "Hello";
function count(x, y) {
    return x + y;
}
b = count(1, 2);
console.log(b);
// any
// unknown 未知的 类型安全的any
let d;
d = 99;
d = "Hello";
let e = 12;
// 不可以将一个未知类型分配给string
// e = d;
// 需要进行断言
e = d; // 断言1
e = d; // 断言2
let str1 = "Hello";
str1.toUpperCase(); // 不告警
let str2 = "Hello";
str2.toUpperCase(); // 不告警
let str3 = "Hello";
str3.toUpperCase(); // 告警 不断言的话 .啥都报错
// never 应用场景: 函数返回never的场景 不是用来限制变量的 限制函数的返回值类型的 never是TS主动推断出来的
let f;
function demo() {
    throw new Error("demo");
}
// demo();
// void 1 用于函数返回值的声明 2
function loginMessage(msg) {
    console.log(msg);
}
loginMessage("Hello");
// object 只能存储非原始类型 Object 可以存储可以调用到 Object 的类型 存不了 null 和 undefined
let person1;
person1 = { name: "liuChang", age: 18, gender: 19 };
// 函数参数限制
let count1;
count1 = function (a, b) {
    return a + b;
};
console.log(count1(1, 2));
let arr1;
arr1 = [1, 2, 3];
console.log(arr1);
// 元组 tuple 不是关键字 是一种特殊的数据类型
let arr2;
arr2 = ["hello", 1];
let arr3; // ? 可选
arr3 = ["hello", 1, true];
let arr4; // 任意多个
arr4 = [1, "hello", "world"];
console.log(1 /* Gender.MALE */, 2 /* Gender.FEMALE1 */, 4 /* Gender.OTHER */);
function walk(str) {
    switch (str) {
        case 1 /* Gender.MALE */:
            console.log("male");
            break;
        case 2 /* Gender.FEMALE1 */:
            console.log("female");
            break;
        case 4 /* Gender.OTHER */:
            console.log("other");
            break;
        default:
            console.log("error");
    }
}
walk(1 /* Gender.MALE */);
function printStatus(data) {
    console.log(data);
}
printStatus("LiuChang");
let house;
house = {
    height: 1,
    width: 2,
    num: 1,
    cell: 1,
    room: "1",
};
const logFunc = () => {
    console.log("Logging...");
};
logFunc();
