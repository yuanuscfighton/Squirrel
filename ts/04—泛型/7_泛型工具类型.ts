/*
  1. 泛型工具类型：ts 内置了一些常用的工具类型，来简化 ts 中的一些常见操作

  说明：它们都是基于泛型实现的（泛型适用于多种类型，更加通用），并且是内置的，可以直接在代码中使用

  这些工具类型有很多，例如，
    （1）Partial<Type>
    （2）Readonly<Type>
    （3）Pick<Type, Keys>
    （4）Record<Keys, Type>

 */


////////////////////////////////////////////////////////////////////////////////
/*
  ① Partial<Type> 用来构造（创建）一个类型，将 Type 的所有属性设置为可选

    解释：构造出来的新类型 PartialProps 结构和 Props 相同，但所有属性都变为可选的
*/
interface Props1 {
    id: string
    children: number[]
}

type PartialProps = Partial<Props1>

let p: Props1 = {
    id: '000',
    children: [1, 1]
}

let p1: PartialProps = {
    id: '111',
    children: [1, 2, 3]
}


////////////////////////////////////////////////////////////////////////////////
/*
  ② Readonly<Type> 用来构造一个类型，将 Type 的所有属性都设置为 readonly（只读）

    解释：构造出来的新类型 ReadonlyProps 结构和 Props 相同，但所有属性都变为只读的
*/
interface Props2 {
    id: string
    children: number[]
}

type ReadonlyProps = Readonly<Props2>
let p2: ReadonlyProps = {id: '1', children: []}
// p2.id = '2'; // 错误信息：Attempt to assign to const or readonly variable


////////////////////////////////////////////////////////////////////////////////
/*
  ③ Pick<Type, Keys> 从 Type 中选择一组属性来构造新类型

  解释：
    （1）Pick 工具类型有2个类型变量，1表示选择谁的属性，2表示选择哪几个属性
    （2）其中第2个类型变量，如果只选择一个，则只传入该属性名即可
    （3）第2个类型变量传入的属性，只能是第1个类型变量中存在的属性
    （4）构造出来的新类型 PickProps，只有 id 和 title 两个属性类型
*/
interface Props3 {
    id: string,
    title: string,
    children: number[],
}

type PickProps = Pick<Props3, 'id' | 'title'>
let p3: PickProps = {
    id: '123',
    title: 'title',
}


////////////////////////////////////////////////////////////////////////////////
/*
  ④ Record<Keys,Type> 构造一个对象类型，属性键位 Keys，属性类型为 Type

  解释：
    （1）Record 工具类型有2个类型变量，1表示对象有哪些属性，2表示对象属性类型
    （2）构建的新对象类型 RecordObj 表示，这个对象有3个属性，分别为 a/b/c，属性值的类型都是 string[]
*/
type RecordObj = Record<'a' | 'b' | 'c', string[]>
let obj: RecordObj = {
    a: ['1'],
    b: ['2'],
    c: ['3'],
}