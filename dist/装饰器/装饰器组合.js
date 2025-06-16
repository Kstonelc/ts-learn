"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器
function test1(target) {
    console.log("test1");
}
// 装饰器工厂
function test2() {
    console.log("test2工厂");
    return function (target) {
        console.log("test2");
    };
}
function test3() {
    console.log("test3工厂");
    return function (target) {
        console.log("test3");
    };
}
function test4(target) {
    console.log("test4");
}
let Person12 = class Person12 {
};
Person12 = __decorate([
    test1,
    test2(),
    test3(),
    test4
], Person12);
// 1 优先执行工厂 从上到下 2 装饰器 洋葱模型 依次执行
const p12 = new Person12();
console.log(p12);
