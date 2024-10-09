/*
  1. 泛型的类型变量可以有多个，并且类型变量之间还可以约束，比如，第2个类型变量受到第一个类型变量约束

  例如，创建一个函数来获取对象中属性的值
    demo 👇🏻

  2. 解释
    （1）添加了第2个类型变量 Key，两个类型变量之间使用（,）逗号分隔

    （2）keyof 关键字接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型

    （3）本示例中 keyof Type 实际上获取的是 person 对象所有键的联合类型，也就是：'name|age'

    （4）类型变量 Key 受到 Type 约束，可以理解为：Key 只能是 Type 所有键中的任意一个，或者只能访问对象中存在的属性
 */

function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let person = {name: '张三', age: 20}
getProp(person, 'name');

getProp(20, 'toFixed');
getProp('abc', 'split');
getProp('dddd', 1); // 此处1表示索引值
