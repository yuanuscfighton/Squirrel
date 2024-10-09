let songs: string[] = ['歌1', '歌2'];

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}


/*
    1. # 执行 tsc 10_枚举原理.ts

    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));

    枚举不仅用作类型，还提供值，即，其它类型会在编译为 js 代码的时候自动移除，但是枚举类型会编译为 js 代码


    2. 一般情况下，推荐使用字面量类型+联合类型组合的方式，因为相比枚举，这种方式更加直观、简洁、高效

    3. 源码解释

    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));

    （1）Js 的自调用函数，先创建一个函数，然后直接调用
        (function(参数))(传入的参数)

    （2）再调用的时候，传入 Direction 或者 Direction = {}。
    由于 Direction 在声明的时候没有指定初始值，所以当 Direction 是 undefined 时，会给 Direction 设置一个空对象
        (Direction || (Direction = {}))
 */
