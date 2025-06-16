let a: string;
let b: number;
let c: boolean;

// a = 9;
a = "Hello";

function count(x: number, y: number): number {
  return x + y;
}

b = count(1, 2);
console.log(b);

// any
// unknown 未知的 类型安全的any
let d: unknown;
d = 99;
d = "Hello";

let e: number = 12;
// 不可以将一个未知类型分配给string
// e = d;
// 需要进行断言
e = d as number; // 断言1
e = <number>d; // 断言2

let str1: string = "Hello";
str1.toUpperCase(); // 不告警

let str2: any = "Hello";
str2.toUpperCase(); // 不告警

let str3: unknown = "Hello";
(str3 as string).toUpperCase(); // 告警 不断言的话 .啥都报错

// never 应用场景: 函数返回never的场景 不是用来限制变量的 限制函数的返回值类型的 never是TS主动推断出来的
let f: never;
function demo(): never {
  throw new Error("demo");
}

// demo();

// void 1 用于函数返回值的声明 2

function loginMessage(msg: string): void {
  console.log(msg);
}

loginMessage("Hello");

// object 只能存储非原始类型 Object 可以存储可以调用到 Object 的类型 存不了 null 和 undefined

let person1: {
  name: string;
  age?: number;
  [key: string]: any; // 索引签名 value 是 any
};

person1 = { name: "liuChang", age: 18, gender: 19 };

// 函数参数限制
let count1: (a: number, b: number) => number;

count1 = function (a: number, b: number): number {
  return a + b;
};

console.log(count1(1, 2));

let arr1: Array<number>;
arr1 = [1, 2, 3];
console.log(arr1);

// 元组 tuple 不是关键字 是一种特殊的数据类型
let arr2: [string, number];
arr2 = ["hello", 1];

let arr3: [string, number, boolean?]; // ? 可选
arr3 = ["hello", 1, true];

let arr4: [number, ...string[]]; // 任意多个
arr4 = [1, "hello", "world"];

// 枚举 enum const 编译之后的代码比较小
const enum Gender {
  MALE = 1 << 0,
  FEMALE1 = 1 << 1,
  OTHER = 1 << 2,
}

console.log(Gender.MALE, Gender.FEMALE1, Gender.OTHER);

function walk(str: Gender) {
  switch (str) {
    case Gender.MALE:
      console.log("male");
      break;
    case Gender.FEMALE1:
      console.log("female");
      break;
    case Gender.OTHER:
      console.log("other");
      break;
    default:
      console.log("error");
  }
}

walk(Gender.MALE);

// type 造类型
type shuzi = number; // 创建了一个新的类型 主要用于联合类型和交叉类型的定义

type Status = number | string;

function printStatus(data: Status): void {
  console.log(data);
}

printStatus("LiuChang");

type Area = {
  height: number;
  width: number;
};

type Address = {
  num: number;
  cell: number;
  room: string;
};

type House = Area & Address; // 交叉类型 都需要满足
let house: House;
house = {
  height: 1,
  width: 2,
  num: 1,
  cell: 1,
  room: "1",
};

type LogFunc = () => void; // 定义一个类型 LogFunc 是一个函数类型 返回值为 void 使用这种形式限制的时候 TS 不会严格要求函数返回为空 但是会影响返回值的后续使用
const logFunc: LogFunc = () => {
  console.log("Logging...");
};

logFunc();
