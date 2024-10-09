/*

  类型推论
  1. 在 TS 中，某些没有明确指出类型的地方，TS的类型推论机制会帮助提供类型

  2. 发生类型推论的2种常见场景：
  （1）声明变量并初始化时
  （2）决定函数返回值时
 */

/******* 场景1：声明变量并初始化 ******/
// 声明变量并立即初始化值，此时，可以省略类型注解
let age = 20;

// 注意：如果声明变量但没有立即初始化值，此时，必须手动添加类型注解
let a: number;
a = 21;


/******* 场景2：决定函数返回值时 ******/
function add(num1: number, num2: number): number {
    return num1 + num2;
}

function add1(num1: number, num2: number) {
    return num1 + num2;
}
