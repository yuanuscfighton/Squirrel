interface Singable {
    sing(): void
}

class Person implements Singable {
    sing(): void {
        console.log("唱歌🎤");
    }

}

/*

    Person 类实现 Singable 意味着，Person 类中必须提供 Singable 接口中指定的所有方法和属性
 */