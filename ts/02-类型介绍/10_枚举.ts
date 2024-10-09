/*

  枚举
    1. 使用 enum 关键字定义枚举值
    2. 约定枚举名称、枚举中的值以大写字母开头
    3. 枚举中的多个值直接通过, 逗号分隔
    4. 定义好枚举后，直接使用枚举名称作为类型注解

 */
enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

function changeDirection(direction: Direction) {
    console.log('changeDirection' + direction);
}

changeDirection(Direction.DOWN);


/*

  枚举成员的值以及数字枚举
  枚举成员是有值的，默认为：从0开始自增的数值
  把枚举成员的值为数字的枚举，称为"数字枚举"
 */

// 成员设置初始值
enum Direction1 {
    UP = 10,
    DOWN,
    LEFT,
    RIGHT,
}


/*

  字符串枚举：枚举成员的值时字符串

  注意：字符串枚举，没有自增长行为，因此，字符串枚举的每个成员必须有初始值
 */
enum Direction2 {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}