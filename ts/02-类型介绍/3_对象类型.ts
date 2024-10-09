/*
    1. 直接使用 {} 来描述对象结构，
       （1）属性采用：属性名:类型 的形式
       （2）方法采用：方法名():返回值类型 的形式

    2. 在一行代码中，指定了多个属性类型时，使用 ; 分号来分隔
       如果一行代码只指定一个属性类型（例如，通过换行来分隔多个属性类型），则可以去掉分号

    3. 方法的类型也可以使用箭头函数形式，例如，sayHi: () => void
 */
let person: { name: string; age: number; sayHi(): void; greet(name: string): void; foo: () => void } = {
    name: '张三',
    age: 20,
    sayHi() {
        console.log("hello");
    },
    greet(name: string) {
        console.log("你好", name);
    },
    foo() {

    }
}


let person1: {
    name: string
    age: number
    sayHi(): void
    greet(name: string): void
    foo: () => void
} = {
    name: '张三',
    age: 20,
    sayHi() {
        console.log("hello");
    },
    greet(name: string) {
        console.log("你好", name);
    },
    foo() {

    }
}


/////////////////////////////////////////////////////////////////////////////
// 可选参数
function myAxios(config: { url: string, method?: string }) {
    console.log(config);
}

myAxios({
    url: ''
})

myAxios({
    url: '',
    method: ''
})

