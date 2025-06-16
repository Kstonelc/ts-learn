type Constructor = new (...args: any[]) => {};
function LogTime<T extends Constructor>(target: T) {
  return class extends target {
    createdTime: Date;
    constructor(...args: any[]) {
      super(...args);
      this.createdTime = new Date();
    }
    getTime(): Date {
      return this.createdTime;
    }
  };
}

type WithCreatedTime = {
  createdTime: Date;
  getTime(): Date;
};

@LogTime
class Person10 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`我叫${this.name},今年${this.age}岁`);
  }
}

interface Person10 {
  getTime(): Date;
}
const p3 = new Person10("小明", 18) as Person10;
console.log(p3.getTime());
