class Point {
    x = 1;
    y = 2;

    // 类的实例方法
    scale(n: number): void {
        this.x *= n
        this.y *= n
    }
}

const p = new Point();

// 类的实例方法是通过类的实例调用
p.scale(10);
console.log(p.x, p.y);