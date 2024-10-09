
/*

  class 类
    实例属性初始化
 */
class Person {
    // 声明成员 age，类型为 number（没有初始值）
    age: number;

    // 声明成员 gender，并设置初始值，此时可以省略类型注解
    gender = '♂'
}

const p = new Person();

p.age;
p.gender;