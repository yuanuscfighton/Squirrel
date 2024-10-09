/*
  1. 泛型可以在保证安全前提下，让函数等于多种类型一起工作，从而实现复用

  2. 常用于：函数、接口、class 中

  3. 需求：创建一个 id 函数，传入什么数据就返回该数据本身，也就是说，参数和返回值类型相同
    （1）比如，id(10) 调用以上函数就会直接返回 10 本身。但是，该函数只接收数值类型，无法用于其它类型
        function id(value: number): number { return value; }
    （2）为了能让函数能够接受任意类型，可以将参数类型修改为 any。但是，这样就失去了 ts 的类型保护，类型不安全
        function id(value: any): any { return value; }

  4. 泛型在保证类型安全（不丢失类型信息）的同时，可以让函数与多种不同的类型一起工作，灵活可复用。
    实际上，在 C# 和 Java 等编程语言中，泛型都是可以用来实现可复用组件功能的主要工具之一


  5.创建泛型函数
       function id<Type>(value: Type): Type { return value; }

 */

function id<Type>(value: Type): Type {
    return value;
}

const num: number = id<number>(10);
const str: string = id<string>('aaa');

/*
  通过泛型就做到了让id函数与多种不同的类型一起工作，实现了复用的同时保证了类型的安全
 */