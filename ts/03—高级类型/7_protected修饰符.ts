/*
  1. protected 表示受保护的，仅对其声明所在类和子类中（非实例对象）可见

  2. 在子类的方法内部可以通过 this 来访问父类中受保护的成员，但是，对实例不可见
 */
class Animal {
    protected eat() {
        console.log("吃东西");
    }

    foo() {
        // 在本类的其它方法中可见
        this.eat();
    }
}

class Dog extends Animal {
    move() {
        console.log("走两步");
        // 在子类中可见
        this.eat();
    }
}

const d = new Dog();

// 但是，对实例不可见
// d.eat();


d.move();