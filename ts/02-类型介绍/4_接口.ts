/*
  1. 当一个对象类型被多次使用的时候，一般会使用接口（interface）来描述对象的类型，达到复用的目的

  2. 解释
    （1）使用 interface 关键字来声明接口
    （2）声明接口后，直接使用接口名称作为变量的类型
    （3）因为每一行只有一个属性类型，因此，属性类型后可以没有 ; 分号

  3. 对比：interface（接口）和 type（类型别名）
    （1）相同点：都可以给对象指定类型
    （2）不同点：
        （i）接口，只能为对象指定类型
        （ii）类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名，例如，type NumStr = number | string
 */
// 接口
interface IPerson {
    name: string;
    age: number;
    sayHi(): void;
}

let p: IPerson = {
    name: '李四',
    age: 20,
    sayHi() {
        console.log("hi");
    }
}

// 类型别名
type TPerson = {
    name: string;
    age: number;
    sayHi(): void;
}

let p1: TPerson = {
    name: '李四',
    age: 20,
    sayHi() {
        console.log("hi");
    }
}