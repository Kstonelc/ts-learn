// interface 是定义结构的一种方式

/*
 * 1 接口只可定义格式 不可以包含任何实现
 * */
interface IPerson {
  name: string;
  age: number;
  speak(n: number): void;
}

class Person1 implements IPerson {
  data(data: any) {
    throw new Error("Method not implemented.");
  }
  constructor(
    public name: string,
    public age: number,
  ) {
    this.name = name;
    this.age = age;
  }
  speak(n: number): void {
    console.log(`我叫${this.name},今年${this.age}岁`);
  }
}

let p = new Person1("张三", 18);
p.speak(1);

// 接口可以当做类型用
interface UserInterface {
  name: string;
  readonly gender: string;
  age: number;
  run: (n: number) => void;
}

const user: UserInterface = {
  name: "张三",
  gender: "男",
  age: 20,
  run(n: number) {
    console.log(`我叫${this.name},今年${this.age}岁`);
  },
};

user.run(1);
