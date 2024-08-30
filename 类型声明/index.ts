// 使用: 对变量进行类型声明
let a: string
let b: number
let c: boolean

a = "hello"
// a= 1 报错


function demo(x: number, y: number):number{
    return x + y
}

console.log(demo(100, 200))

/* 类型总览
* string (js)
* number (js)
* boolean (js)
* null (js)
* undefined (js)
* bigint (js)
* symbol (js)
* object(Array, Function, Date, Error等) (js)
* any (ts) 任意类型 放弃对该变量的类型检查
* unknown (ts) 未知类型 起初不确定的类型 后期才可以确定 相当于一个类型安全的any
* never (ts) 任何值都不是
* void (ts) 空 不返回任何值 undefined是可以接受的一种void
* tuple (ts) 特殊的数组类型，可以存储固定数量的元素，并且每个元素的类型是已知的且可以不同  let arr1: [string,number]  let arr3: [number,...string[]]
* enum (ts) 枚举类型 ⼀组命名常量
* type (ts) 可以为任意类型创建别名
* interface (ts)
* */

let person1: { name: string, age?: number }
// 含义同上，也能⽤分号做分隔
let person2: { name: string; age?: number }
// 含义同上，也能⽤换⾏做分隔
let person3: {
    name: string
    age?: number
    // 可以允许任意的键值对
    [key: string]: any
    // gender?: string
}
// 如下赋值均可以
person1 = {name:'李四',age:18}
person2 = {name:'张三'}
person3 = {name:'王五'}
// 如下赋值不合法，因为person3的类型限制中，没有对gender属性的说明
person3 = {name:'王五',gender:'男'}


// 函数类型声明 声明接受的参数和返回值的类型
let count: (a: number, b: number) => number
count = function (x, y) {
    return x + y
}
console.log(count(1, 2))


// 枚举类型
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction)

type num = number;
let price: num
price = 100

// 交叉类型 实际上是并集
type Area = {
    height: number; //⾼
    width: number; //宽
};
//地址
type Address = {
    num: number; //楼号
    cell: number; //单元号
    room: string; //房间号
};
// 定义类型House，且House是Area和Address组成的交叉类型
type House = Area & Address;
const house: House = {
    height: 180,
    width: 75,
    num: 6,
    cell: 3,
    room: '702'
};
