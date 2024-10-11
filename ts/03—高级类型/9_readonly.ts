/*
  1. 除了可见性修饰符之外，还有一个常见的修饰符，readyOnly（只读修饰符）

  2. readyOnly 表示只读，用来防止在构造函数之外对属性进行赋值

  3. readOnly 只能修饰属性，不能修饰方法

  4. 接口或者 {} 表示的对象类型，也可以使用 readOnly
 */

class Person {

    // 只读属性
    readonly age: number = 19;
    // 只要是 readonly 来修饰的属性，必须手动提供明确的类型
    // readonly name = "张三"

    constructor(age: number, name: string) {
        this.age = age;
        // Type 'string' is not assignable to type '"张三"'
        // this.name = name
    }
}

const p = new Person(30, "李四");
console.log(p.age);


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

interface IPerson {
    // 接口 表示的对象类型，也可以使用 readOnly
    readonly name: string;
}

let obj: IPerson = {
    name: 'TOM'
}

// 错误：Attempt to assign to const or readonly variable
// obj.name = 'Jack';