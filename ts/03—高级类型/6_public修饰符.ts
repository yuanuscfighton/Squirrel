/*
  1. 可见性修饰符包括：public、protected、private
    （1）public，公有成员可以被任何地方访问，默认可见性
    （2）因为 public 是默认的，所以可以省略
 */


class Animal {
    public eat() {
        console.log("吃东西");
    }

    foo() {

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