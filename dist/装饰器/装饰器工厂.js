"use strict";
// 装饰器工厂 是一个返回装饰器函数的函数 可以为装饰器添加参数 可以更加灵活的控制装饰器的行为
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//  装饰器工厂
function LogInfo(n) {
    return function (target) {
        target.prototype.introduce = function () {
            for (let i = 0; i < n; i++) {
                console.log(`我叫${this.name},今年${this.age}岁`);
            }
        };
    };
}
let Person11 = class Person11 {
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
    }
    speak() {
        console.log("你好呀");
    }
};
Person11 = __decorate([
    LogInfo(100)
], Person11);
// 需求: 让 Person11 有一个实例方法 introduce
const p11 = new Person11("小王", 18);
p11.introduce(); // 如何更加灵活的控制？ 一个函数返回的是装饰器 就叫做装饰器工厂
