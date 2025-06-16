"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogTime(target) {
    return class extends target {
        constructor(...args) {
            super(...args);
            Object.defineProperty(this, "createdTime", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.createdTime = new Date();
        }
        getTime() {
            return this.createdTime;
        }
    };
}
let Person10 = class Person10 {
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
    speak() {
        console.log(`我叫${this.name},今年${this.age}岁`);
    }
};
Person10 = __decorate([
    LogTime
], Person10);
const p3 = new Person10("小明", 18);
console.log(p3.getTime());
