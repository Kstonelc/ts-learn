function Demo(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  /*
   * 1 target: 对于静态方法来说是类本身 对于实例方法来说是类的原型对象
   * 2 propertyKey: 方法名
   * 3 descriptor: 描述符
   * */
  console.log(target, propertyKey, descriptor);
}
class Person15 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @Demo
  speak() {
    console.log(`我叫${this.name}, 今年${this.age}岁`);
  }

  @Demo
  static isAdult(age: number): boolean {
    return age >= 18;
  }
}

function Logger(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  // 存储原始方法
  const originalMethod = descriptor.value;
  // 替换原始方法
  descriptor.value = function (...args: any[]) {
    console.log(`调用了 ${propertyKey} 方法`);
    // 调用原始方法 call 和 apply 的区别
    const result = originalMethod.call(this, ...args);
    console.log(`${propertyKey} 方法执行完成`);
    return result;
  };
}

class Person16 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @Logger
  speak(n: number): void {
    console.log(`我叫${this.name},今年${this.age}岁`);
  }

  static isAdult(age: number): boolean {
    return age >= 18;
  }
}

const p16 = new Person16("张三", 18);
p16.speak(3);
