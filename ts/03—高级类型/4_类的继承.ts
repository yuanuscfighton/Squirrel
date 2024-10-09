/*
  1. 类继承的两种方式：
    （1）extends（继承父类）
    （2）implements（实现接口）
 */
class Animal {
    eat() {
        console.log("吃东西");
    }
}

class Dog extends Animal {
    move() {
        console.log("走两步");
    }
}

const d = new Dog();

d.eat();
d.move();
