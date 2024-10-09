/*
  1. 除了 class 之外，ts 中的其它类型也存在相互兼容的情况，
    包括：（1）接口的兼容性，（2）函数兼容性

  2. 接口之间的兼容性，类似于 class，并且，class 和 interface 之间也存在兼容性
 */

interface Point {
    x: number;
    y: number;
}

interface Point2D {
    x: number;
    y: number;
}

let p1: Point;
let p2: Point2D = p1;

interface Point3D {
    x: number;
    y: number;
    z: number;
}

let p3: Point3D;
p2 = p3;

class Point4D {
    x: number;
    y: number;
    z: number;
    a: number;
}


// class 和 interface 之间也存在兼容性
let p4: Point2D = new Point4D();

