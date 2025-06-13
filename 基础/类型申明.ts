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

demo();

// void 1 用于函数返回值的声明 2

function loginMessage(msg: string): void {
  console.log(msg);
}
