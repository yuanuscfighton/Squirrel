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
       * return preState
       *
       * ⚠️⚠️ 如果返回的状态和之前是一样的，则不进行页面的更新 ⚠️⚠️
       * 进行的是浅比较，尽管preState内容发生了变化，但引用是一样的
       * preState.unshift(data); // 影响了原数组 ==> reducer就不是纯函数了
       */

      // ...preState之前那些人的数组，data新传入的Person对象，把新Person放在数组中第1个位置上
      return [data, ...preState];
    default:
      return preState;
  }
}