/*
  1. private：只在当前类中可见，对实例对象以及子类也是不可见的

  2. 私有属性或方法只在当前类中可见，对子类和实例对象也都是不可见的
 */
class Animal {
    private __eat__() {
        console.log("吃东西");
    }

    foo() {

    }
}

class Dog extends Animal {
    move() {
        console.log("走两步");
        // this.__eat__();
    }
}

const d = new Dog();

// 但是，对实例不可见
// d.eat();


d.move();