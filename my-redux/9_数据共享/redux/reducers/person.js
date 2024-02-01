import {ADD_PERSON} from "../constants";

// 初始化人的列表
const initState = [{id: "001", name: "张三", age: 10}]

/**
 * ⚠️reducer是纯函数!!
 * 纯函数：只要是同样的输入(实参)，必定得到同样的输出(返回)
 * 必须遵守以下约束：
 *  （1）不得改写参数数据
 *  （2）不会产生任何副作用，例如，网络请求，输入和输出设备
 *  （3）不能调用Date.now()或者Math.random()等不纯的方法
 */
export function personReducer(preState = initState, action) {

  // 验证personReducer是否执行了
  // console.log('personReducer invoked');

  const {type, data} = action;

  // 👇🏻下面是加工状态
  switch (type) {
    case ADD_PERSON:
      /**
       * ❌❌ 错误写法 ❌❌
       * preState.unshift(data);
       * // console.log(preState);
       * return preState;
       *
       * ⚠️⚠️ 如果返回的状态和之前是一样的，则不进行页面的更新 ⚠️⚠️
       * 因为这里进行的是浅比较，尽管preState内容发生了变化，但引用是一样的，所以redux认为人数组没有发生变化
       *
       * [...preState]会生成一个新的数组(新的对象)
       *
       * preState.unshift(data); // 影响了原数组 ==> reducer就不是纯函数了
       */

      /**
       * 1. 问：什么是纯函数？
       *    答：只要是同样的输入（实参），必定得到统一的输出（返回）
       *    即，foo(1)=1，过一段时间后，再次调用foo(1)，返回的结果也得是1
       *
       * 2. 必须遵守以下约束
       *    （1）不得改写参数数据，例如，
       *       👇🏻下面foo函数就不是纯函数了，因为改写了参数的值
       *         function foo(a) {
       *            a = 9;
       *         }
       *       同理，上面的preState，一旦调用了unshift方法后，就会修改preState的值了，这就属于修改参数数据了 → 导致personReducer就不纯了
       *
       *    （2）不会产生任何副作用，例如，网络请求，输入和输出设备
       *
       *    （3）不能调用Data.now()或者Math.random()等不纯的方法，因为同样的输入，得不到同样的输出
       */

      // ...preState之前那些人的数组，data新传入的Person对象，把新Person放在数组中第1个位置上
      return [data, ...preState];
    default:
      return preState;
  }
}