// Js 中提供了 typeof 操作符，用来在 Js 中获取数据的类型
console.log(typeof 'Hello TS');


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

/*
   1. ts 中也提供了 typeof 操作符，可以在类型上下文中引用变量或者属性的类型

   2. 使用场景：根据已有变量的值，获取该值的类型，来简化类型的书写
 */
let p = {x: 1, y: 2};

// typeof 出现在类型注解的位置（即，参数名称的冒号后面）所处的环境就在类型上下文（区别于 Js 代码）
function formatPoint(point: typeof p) {
    console.log(point)
}

function formatPoint1(point: { x: number, y: number }) {
}

formatPoint({x: 1, y: 2});


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// 注意：类型上下文中的 typeof 只能用来查询变量或者属性的类型，无法查询其它形式的类型（比如，函数调用的类型）
let num: typeof p.x; // num 变量是 number 类型

function add(num1: number, num2: number) {
    return num1 + num2;
}

// ❌ 错误
// let ret: typeof add(1, 2); // Left side of comma operator is unused and has no side effects


