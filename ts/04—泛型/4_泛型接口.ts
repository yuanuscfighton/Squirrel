/*
  1. 泛型接口：接口可以配合泛型来使用，来增加其灵活性，增强其复用性

  解释：
    （1）在接口名称的后面添加 <类型变量>，那么这个接口就变成了泛型接口
    （2）接口的类型变量，对接口中所有其它成员可见，也就是接口中所有成员都可以使用类型变量
    （3）使用泛型接口时，需要显式指定具体的类型（例如，此处的 IdFunc<number> ）
    （4）此时，id 方法的参数和返回值类型都是 number，ids 方法的返回值类型是 number[]

 */

interface IdFunc<Type> {
    id: (value: Type) => Type
    ids: () => Type[]
}

let obj: IdFunc<number> = {
    id(value) {
        return value
    },
    ids() {
        return [1, 3, 5]
    }
}