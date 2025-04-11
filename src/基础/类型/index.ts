let foo: string = "Hello TypeScript";
console.log(foo);

//any 类型

let x: any;
x = 1;
x = "foo";

// 类型推断
// function add(x, y) {
//   return x + y;
// }
//
// add(1, [1, 2, 3]);

// 污染问题
let x1: any = "hello";
let y1: number;

y1 = x1; // 不报错

y1 * 123; // 不报错
// y1.toFixed(); // 不报错

// 为了解决污染的问题 unknown类型 所有类型的值都可以分配给unknown类型,和any的区别是unknown的值不可以直接赋值给其他的类型的变量除了any和unknown, 不可以调用unknown类型变量的方法和属性
let x2: unknown;

x2 = true; // 正确
x2 = 42; // 正确
x2 = "Hello World"; // 正确

/* JS 8种数据类型 TS也有这 8 种
 * 1 boolean 2 string 3 number 4 bigint 5 symbol 6 object 7 undefined 8 null 首字母大写的都是内置对象
 * */

const a: boolean = true;
const b: string = "hello";
const c: number = 20;
const d: bigint = 123n; // 和number类型不兼容 编译目标需要大于2020

// null类型和 undefined类型

let e = undefined; // any
const f = null; // 开启strictNullChecks则编译成null否则为any

console.log(1111, typeof f, typeof e);
//
// let c = null; // any
// const d = null; // any
