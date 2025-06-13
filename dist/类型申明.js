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
demo();
// void 1 用于函数返回值的声明 2
function loginMessage(msg) {
    console.log(msg);
}
