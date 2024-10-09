let age: number = 30;

// 报错，Type string is not assignable to type number
// age = '20'

/*
  笔记：
    1. Js 有类型（比如，number、string 等）但是Js 不会检查变量类型是否发生变化，而 Ts 会检查

    2. 类型注解
      （1）let [变量名][:类型] = xx，例如，let x: number = 10;
         ① : number —— 就是类型注解
         ② 作用：为变量添加类型约束

    3. 常用类型
      （1）Js 已有类型
         ① 原始类型：number / string / boolean / null / undefined / symbol
         ② 对象类型：object（包括：数组、对象、函数等对象）

      （2）Ts 新增类型
           联合类型：自定义类型、接口、元组、字面量类型、枚举、void、any 等
*/