"use strict";
// 装饰类中的属性
// function Demo(target: any, propertyKey: string): any {
//   /*
//    * 1 target对于静态属性来说是类的原型对象 对于实例属性来说是实例对象
//    * 2  propertyKey 为属性名
//    * */
//   console.log(target, propertyKey);
// }
//
// class Person13 {
//   @Demo name: string;
//   @Demo age: number;
//   @Demo static school: string;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
//
// const p13 = new Person13("小红", 18);
// console.log(p13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 应用举例 age属性一改 就会知道
function State(target, propertyKey) {
    let value;
    console.log(target, propertyKey);
    Object.defineProperty(target, propertyKey, {
        get() {
            return value;
        },
        set(newValue) {
            console.log("age属性变更了");
            value = newValue;
        },
    });
}
class Person14 {
    constructor(name, age) {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.age = age;
    }
}
__decorate([
    State
], Person14.prototype, "age", void 0);
const p14 = new Person14("李四", 20);
p14.age = 25; // age属性变更了
p14.age = 30; // age属性变更了
