class Person {
  public name: string; // 默认是 public 类内部 子类 类外部访问 protected 类内部 子类访问 外部不可以访问 private 类内部访问 readonly 只读 属性无法修改
  public age: number; // 默认为 public

  // 构造器
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`我叫${this.name},今年${this.age}岁`);
  }
}

class Student extends Person {
  printPackage() {
    throw new Error("Method not implemented.");
  }
  grade: string;
  constructor(name: string, age: number, grade: string) {
    // 继承父类属性
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`我叫${this.name},今年${this.age}岁,在学习`);
  }

  // 最好加上 override
  override speak() {
    console.log(`我叫${this.name},今年${this.age}岁,在学${this.grade}`);
  }
}

class Animal {
  // 简写之后 不用全部定义
  constructor(
    public readonly name: string,
    protected age: number,
  ) {}
}

const p1 = new Person("张三", 18);
p1.speak();

const s1 = new Student("李四", 18, "128");
s1.speak();

const a1 = new Animal("王五", 18);
console.log(a1.name);
// a1.name = "djaioldad"
// a1.age; // 访问不到 protected 属性
