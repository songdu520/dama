// let str: string = "hello world";
// let num: number = 6;
// let done: boolean = true;

//! 定义数组
// let arr: Array<number> = [1, 2, 3];
// let arr2: number[] = [4, 5];

// let arr3: (string | number)[] = [7, 7, '7'];
// let arr3: any[] = [7, 7, '7'];



//! 元组 Tuple  规定数组的长度，规定里面每一项的类型
// let arr: [number, number, string] = [1, 2, 'hello'];
// arr.split()   不能使用不是数组的方法
// console.log(arr[3]);   // 不能够越界访问


//! 枚举  Enum
// enum Color {
//   Red = 5, Green = 10, Bule = 20
// }
// let c: Color = Color.Green;
// console.log(c);
// let colorName: string = Color[10];
// console.log(colorName);


//! 自动类型推断 & any类型
// let a: boolean = true;
// a = 5;

// let a: any = true;
// a = 5;
// a = 'haha';


//! 没有任何类型， 和any相反的， 无返回值   void
// function fn(): number {
//   return 3
// }
// function fn(): void {
//   console.log(5);
// }



//! 联合类型, 可选的类型
// let a: number | string | boolean = 4;
// a = "4";
// a = true;


//! never  从不，用于死循环或者报错
// function fn(): never {
//   throw new Error()
// }
// function fn(): never {
//   while(true) {

//   }
// }


//! null undefined  他们是任何类型的子类型
// let a: undefined = undefined;
// let n: number;
// n = undefined;


//! 函数
// function add(y: number, x?: number): number {
//   return y;
// };
// add(3, 5);
// let add2 = function(x: number, y: number): number {
//   return x + y
// }
// let add2: (x: number, y: number) => number = function(x: number, y: number): number {
//   return x + y
// }


//! 接口  interface  多个类的行为的抽象
// interface Person {
//   name: string,
//   age: number,
//   phone?: number | string,
//   // 索引签名
//   [propName: string]: any,
//   [propName2: number]: any
// }

// let obj: Person = {
//   name: 'zhangsan',
//   age: 30,
//   phone: 123333333
// }
// let obj2: Person = {
//   name: 'zhangsan',
//   age: 30
// }
// let obj3: Person = {
//   name: 'zhangsan',
//   age: 30,
//   address: 'jiubao',
//   a: 3,
//   b: 4,
//   5: 'sss'
// }


//! 泛型
// function add(x: string | number, y: string | number): string | number {
//   return `${x}${y}`;
// }

// function add<T>(x: T, y: T) {
//   return `${x}${y}`;
// }

// add <number> (3, 4)


//! 类
class Animal {
  private name: string = 'cat';
  // constructor是类里面的一个特殊的函数，只要去实例化，就会自动调用
  // constructor(name: string) {
  //   this.name = name;
  // }
  
  sayName(): string {
    return this.name;
  }
}

class Cat extends Animal {
  // constructor(name: string) {
  //   super(name)
  // }
}

let cat = new Cat();
console.log(cat.sayName());