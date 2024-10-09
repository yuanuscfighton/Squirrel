/*
  1. 接口继承：将公共的属性或者方法抽离出来，通过继承来实现复用
 */

interface Point2D {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
    z: number;
}


////////////////////////////////////////////////////////
// 通过 extends 关键字实现了 Point3DOpt 继承 Point2DOpt，达到复用的目的
interface Point2DOpt {
    x: number;
    y: number;
}

// 使用继承实现复用
interface Point3DOpt extends Point2D {
    z: number
}