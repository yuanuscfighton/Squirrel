/*
  1. 泛型约束：默认情况下，泛型函数的类型变量 Type 可以代表多个类型，这导致无法访问任何属性
        例如，id('a'); 调用函数时，获取参数的长度
        function id<Type>(value: Type): Type {
            return value.length;
        }

  2. 解释：Type 可以代表任意类型，无法保证一定存在 length 属性，比如，number 就没有 length
    此时，就需要为泛型添加约束来收缩类型（缩窄类型取值范围）

  3. 添加泛型约束收缩类型：主要有以下两种方式：① 指定更加具体的类型，② 添加约束
    （1）指定更加具体的类型
        function id<Type>(value: Type[]): Type[] {
            console.log(value.length);
            return value;
        }

    （2）添加约束
        解释：
            ① 创建描述约束的接口 ILength，该接口要求提供 length 属性
            ② 通过 extends 关键字使用该接口，为泛型（类型变量）添加约束
            ③ 该约束表示：传入的类型必须具有 length 属性
            注意：传入的实参（比如，数组）只要有 length 属性即可，这也符合前面讲到的接口的类型兼容性

 */


/* 添加约束 */
interface ILength {
    length: number
}

function id<Type extends ILength>(value: Type): Type {
    console.log(value.length);
    return value;
}

id(['a', 'c']);
id('abc');

// 错误
// id(123);