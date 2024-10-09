/*
  1. 泛型类：class 也可以配合泛型来使用

    例如，React 的 class 组件的基类 Component 就是泛型类，不同的组件有不同的 props 和 state

    interface IState {
        count: number
    }

    interface IProps {
        maxLength: number
    }

    class InputCount extends React.Component<IProps, IState> {
        state: IState = {
            count: 0
        },
        render() {
            return <div>{ this.props.length}</div>
        }
    }

    解释：React.Component 泛型类的两个类型变量，分别指定 props 和 state 类型
 */


/*
   创建泛型类

    解释：
      （1）类似于泛型接口，在 class 名称后面添加 <类型变量>，这个类就变成泛型类
      （2）此时的 add 方法，采用的是箭头函数形式的类型书写方式

*/

class GenericNumber<NumberType> {
    defaultValue: NumberType
    add: (x: NumberType, y: NumberType) => NumberType
}

const myNum = new GenericNumber<number>();
myNum.defaultValue = 10;