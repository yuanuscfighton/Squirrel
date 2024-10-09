/*
  1. 注意：在结构化类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型，这种说法并不准确
  更准确的说法：对于对象类型来说，y 的成员变量至少与 x 相同，则 x 兼容 y（成员多的可以赋值给少的）

  2. 解释：
    （1）Point3D 的成员至少与 Point 相同，则 Point 兼容 Point3D
    （2）所以成员多的 Point3D 可以赋值给成员少的 Point
 */

class Point {
    x: number;
    y: number
}

class Point3D {
    x: number;
    y: number;
    z: number
}

const p: Point = new Point3D(); // 成员多的可以赋值给少的


// 报错：Property z is missing in type Point but required in type Point3D
// const error: Point3D = new Point();
