// 泛型函数
function logData<T>(data: T) {
  console.log(data);
}

logData<string>("Hello, TypeScript!"); // 输出: Hello, TypeScript!
logData<number>(42);

// 泛型接口
interface PersonInterface<T> {
  name: string;
  age: number;
  data: T;
}

type PersonInfo = {
  id: number;
  name: string;
  age: number;
};

let p2: PersonInterface<PersonInfo> = {
  name: "John",
  age: 30,
  data: {
    id: 123,
    name: "John",
    age: 30,
  },
};

console.log(p2.data);
