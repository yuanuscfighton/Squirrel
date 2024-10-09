// 函数类型


// 为函数制定类型的两种方式：
// 方式1：单独指定参数、返回值的类型
function add(num1: number, num2: number): number {
    return num1 + num2;
}

const sub = (num1: number, num2: number): number => {
    return num1 - num2;
}


// 方式2：同时指定参数、返回值类型
// 解释：当函数作为表达式时，可以通过类似箭头函数形式的语法来为函数添加类型
// 注意：这种形式只适用于函数表达式
const jia: (num1: number, num2: number) => number = (num1, num2) => { // 等号后面相当于是函数的具体实现
    return num1 + num2;
}


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// 函数可选参数
// 在可不传的参数后面添加?（问号）
// 注意：可选参数只嗯呢该出现在参数列表的最后，也就是说可选参数后面不能再出现必选参数
function mySlice(start?: number, end?: number) {
    console.log("起始索引: " + start, " 结束索引: " + end);
}

mySlice()
mySlice(1)
mySlice(1, 2)