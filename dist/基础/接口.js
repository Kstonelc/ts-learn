"use strict";
// interface 是定义结构的一种方式
class Person1 {
    data(data) {
        throw new Error("Method not implemented.");
    }
    constructor(name, age) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: name
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: age
        });
        this.name = name;
        this.age = age;
    }
    speak(n) {
        console.log(`我叫${this.name},今年${this.age}岁`);
    }
}
let p = new Person1("张三", 18);
p.speak(1);
const user = {
    name: "张三",
    gender: "男",
    age: 20,
    run(n) {
        console.log(`我叫${this.name},今年${this.age}岁`);
    },
};
user.run(1);
