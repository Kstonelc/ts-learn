// 装饰器
function test1(target: Function) {
  console.log("test1");
}

// 装饰器工厂

function test2() {
  console.log("test2工厂");
  return function (target: Function) {
    console.log("test2");
  };
}

function test3() {
  console.log("test3工厂");
  return function (target: Function) {
    console.log("test3");
  };
}

function test4(target: Function) {
  console.log("test4");
}

@test1
@test2()
@test3()
@test4
class Person12 {}

// 1 优先执行工厂 从上到下 2 装饰器 洋葱模型 依次执行
const p12 = new Person12();
console.log(p12);
