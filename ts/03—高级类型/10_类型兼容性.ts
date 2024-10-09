let arr = ['a', 'b', 'c'];

// api: forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
arr.forEach(item => {
})

arr.forEach((item, index) => {
})

arr.forEach((item, index, array) => {
})


/*
  1. 两种类型系统：
    （1）Structural Type System（结构化类型系统）
    （2）Nominal Type System（标明类型系统）

    ts 采用的是结构化类型系统，也叫作 duck typing（鸭子类型），类型检查关注的是值所具有的形状。也就是说，
    在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型

  2. 解释

    class Point { x: number, y: number }
    class Point2D { x: number, y: number }

    （1）Point 和 Point2D 是两个名称不同的类
    （2）变量 p 的类型被显示标注为 Point 类型，但是它的值却是 Point2D 的实例，并且没有类型错误
    （3）因为 ts 是结构化类型系统，只检查 Point 和 Point2D 的结构是否相同（相同，都具有 x 和 y 两个属性，属性类型也相同）
    （4）但是，如果在 Nominal Type System 中（比如，C#、Java 等），它们是不同的类，类型无法兼容

 */
class Point {
    x: number;
    y: number;
}

class Point2D {
    x: number;
    y: number;
}

const p: Point = new Point2D();