// 装饰器工厂 是一个返回装饰器函数的函数 可以为装饰器添加参数 可以更加灵活的控制装饰器的行为

//  装饰器工厂
function LogInfo(n: number) {
  return function (target: Function) {
    target.prototype.introduce = function () {
      for (let i = 0; i < n; i++) {
        console.log(`我叫${this.name},今年${this.age}岁`);
      }
    };
  };
}

@LogInfo(100)
class Person11 {
  constructor(
    public name: string,
    public age: number,
  ) {}

  speak() {
    console.log("你好呀");
  }
}

interface Person11 {
  introduce(): void;
}

// 需求: 让 Person11 有一个实例方法 introduce
const p11 = new Person11("小王", 18);
p11.introduce(); // 如何更加灵活的控制？ 一个函数返回的是装饰器 就叫做装饰器工厂
