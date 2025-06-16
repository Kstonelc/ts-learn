"use strict";
// 泛型函数
function logData(data) {
    console.log(data);
}
logData("Hello, TypeScript!"); // 输出: Hello, TypeScript!
logData(42);
let p2 = {
    name: "John",
    age: 30,
    data: {
        id: 123,
        name: "John",
        age: 30,
    },
};
console.log(p2.data);
