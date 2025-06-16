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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
// 应用举例 age属性一改 就会知道
function State(target, propertyKey) {
    var value;
    console.log(target, propertyKey);
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return value;
        },
        set: function (newValue) {
            console.log("age属性变更了");
            value = newValue;
        },
    });
}
var Person14 = function () {
    var _a;
    var _age_decorators;
    var _age_initializers = [];
    var _age_extraInitializers = [];
    return _a = /** @class */ (function () {
            function Person14(name, age) {
                this.age = __runInitializers(this, _age_initializers, void 0);
                __runInitializers(this, _age_extraInitializers);
                this.name = name;
                this.age = age;
            }
            return Person14;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _age_decorators = [State];
            __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: function (obj) { return "age" in obj; }, get: function (obj) { return obj.age; }, set: function (obj, value) { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var p14 = new Person14("李四", 20);
p14.age = 25; // age属性变更了
p14.age = 30; // age属性变更了
