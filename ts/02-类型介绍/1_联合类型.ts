// 数组类型，推荐使用 number[] 写法
let numbers: number[] = [1, 2, 3, 4, 5];
let numbers2: Array<number> = [1, 2, 3, 4, 5];

/*
   1.联合类型

    需求：数组中既有 number 类型，又有 string 类型，应该怎么写？

    联合类型： | 竖线，在 Ts 中叫做联合类型（由两个或者多个其它类型组成的类型，表示可以是这些类型中的任意一种）

    注意：这是 Ts 中联合类型的语法，只有一根竖线
 */

//
let arr: (number | string)[] = [1, 3, 5, 'a', 'b'];


/*
   2.类型别名

    （1）使用场景：当同一个复杂类型被多次使用的时候，可以通过类型别名，简化该类型的使用
    （2）语法：使用 type 关键字创建类型别名
 */
type CustomArray = (number | string)[];

let arr1: CustomArray = [1, 3, 5, 'a', 'b'];