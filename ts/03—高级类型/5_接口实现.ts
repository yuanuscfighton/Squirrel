interface Singable {
    sing(): void
}

class Person implements Singable {
    sing(): void {
        console.log("唱歌🎤");
    }

}