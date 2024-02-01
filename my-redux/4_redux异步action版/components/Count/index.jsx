import React from 'react';

// 获取store，用于保存redux中保存的状态
import store from '../../redux/store';

// 引入actionCreator，专门用于创建action对象
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action';

export default class Count extends React.Component {

  increment = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1));
  }

  decrement = () => {
    const {value} = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber;

    /** ************************************************************ */
    /**
     * 现状：👇🏻下面这种写法，“等500ms”的动作是在Count组件中
     * 举例：让菜晚点上有2种方式，这里是方式1，即，客人（Count组件）先不点菜，先看菜单看5min，然后再告诉服务员（ActionCreators）...
     *
     * 改进：不想在Count组件中等待
     */
    // setTimeout(() => {
    //   store.dispatch(createIncrementAction(value * 1));
    // }, 500);

    /** ************************************************************ */
    /** ************************************************************ */

    /** 让菜晚点上有2种方式，这里是方式2，即，客人不想自己计时5min，直接告诉服务员（ActionCreators）晚5min再上菜，把等的动作交给服务员了  */
    store.dispatch(createIncrementAsyncAction(value * 1, 500));
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <select ref = {c => this.selectNumber = c}>
          <option value = {1}>1</option>
          <option value = {2}>2</option>
          <option value = {3}>3</option>
        </select>&nbsp;

        <button onClick = {this.increment}>加1</button>
        &nbsp;
        <button onClick = {this.decrement}>减1</button>
        &nbsp;
        <button onClick = {this.incrementIfOdd}>当和是奇数再加1</button>
        &nbsp;
        <button onClick = {this.incrementAsync}>异步加1</button>
      </div>
    )
      ;
  }
}
