/*
  1. Js 中的数组在 ts 中就是一个泛型接口

  解释：当我们在使用数组时，ts 会根据数组的不同类型，来自动将类型变量设置为相应的类型

 */

const strs = ['a', 'b', 'c'];
strs.forEach(item => {
});
// 代码提示：forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void;