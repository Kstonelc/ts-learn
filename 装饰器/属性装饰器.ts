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

// 应用举例 age属性一改 就会知道
function State(target: object, propertyKey: string) {
  let key = `___${propertyKey}`; // 使用一个私有变量来存储属性值 将缓存放在实例的自身
  Object.defineProperty(target, propertyKey, {
    get() {
      return this[key];
    },
    set(newValue) {
      console.log("age属性变更了");
      this[key] = newValue;
    },
    enumerable: true,
    configurable: true,
  });
}
class Person14 {
  name: string;
  @State age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p14 = new Person14("李四", 20);
p14.age = 25; // age属性变更了
p14.age = 30; // age属性变更了
