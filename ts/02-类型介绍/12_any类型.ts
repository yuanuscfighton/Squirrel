/*

    1. 原则：不推荐使用 any，这个失去 ts 类型保护的优势。因为当值的类型为 any 时，可以对该值进行任意操作，并且不会有代码提示

    2. 解释：以下操作都不会有任何类型错误提示，即使可能存在错误！

    3. 其它隐式具有 any 类型的情况：
       （1）声明变量不提供类型，也不提供默认值
       （2）函数参数不加类型
 */

let obj: any = {x: 0}

// 访问不存在的属性 或者 赋值
obj.bar = 100;
console.log(obj.aaa);

// 当作函数调用
obj();

// 赋值给其它类型的变量
const n: number = obj;


//////////////////////////////////////////////////////////////////////////////////////////////////
// 隐式 any 类型
let a; // 提示：Variable a implicitly has an any type, but a better type may be inferred from usage

function add(num1, num2) { // num1: any

}

add(1, 2);
