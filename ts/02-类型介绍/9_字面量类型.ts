let str1 = "hello world";

const str2 = "hello world";

let age: 20 = 20;

/*

  1. 类型结果
    （1）变量 str1 的类型为 string 类型
    （2）变量 str2 的类型为 “hello world”

  2. 解释
    （1）str1 是一个变量（let），它额值可以是任意字符串，所以类型为 string
    （2）str2 是一个常量（const），它的值不能变化，只能是 “hello world”，所以它的类型为 “hello world”

  3. 注意
    此处的 “hello world”就是一个字面量类型，也就是说某个特定的字符串也可以作为 ts 中的类型，
    除字符串外，任意 Js 字面量（比如，对象、数字等）都可以作为类型使用

  4. 使用模式：字面量类型配合联合类型一起使用

  5. 使用场景：用来表示一组明确的可选值列表
        例如，方向，只能是 上、下、左、右 中的任意一个

     相比于，string 类型，使用字面量类型更加精确、严谨

 */

function changeDirection(direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') {
    console.log(direction);
}

changeDirection('UP');