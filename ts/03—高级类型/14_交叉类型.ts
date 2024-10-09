/*
  1. 交叉类型（&）：功能类似于接口继承（extends），用于组合多个类型为一个类型（常用于对象类型）

    解释：使用交叉类型之后，新的类型 PersonDetail 就同时具备了 Person 和 Contact 的所有属性类型

 */

interface Person {
    name: string
}

interface Contact {
    phone: string
}

type PersonDetail = Person & Contact

let obj: PersonDetail = {
    name: '张三',
    phone: '1234567890'
}


/*
  2. 交叉类型（&）和接口继承（extends）的对比：
    （1）相同点：都可以实现对象类型的组合
    （2）不同点：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同

 */

// （1）接口继承方式
// interface A {
//     fn: (value: number) => string
// }

// 继承方式会报错（类型不兼容）：Interface B incorrectly extends interface A. Types of property fn are incompatible.
// interface B extends A {
//     fn: (value: string) => string
// }


// （2）交叉类型
interface A1 {
    fn: (value: number) => string
}

interface B1 {
    fn: (value: string) => string
}

// 交叉类型没有报错，可以简单理解为：fn: (value: number | string) => string
type C = A1 & B1;
let c: C
c.fn(1);
c.fn('a');
