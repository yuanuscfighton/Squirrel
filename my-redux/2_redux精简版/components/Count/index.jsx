import React from 'react';

// 1.引入store，用于获取redux中保存的状态
import store from '../../redux/store';

export default class Count extends React.Component {

  // 说明：已经交给redux进行管理了，所以这里不再存储count值了
  // state = { count: 0 };
  // 但state中可以存储本Count组件自身的状态
  state = {
    carName: '奔驰C63'
  }

  /** ******************** 4 *********************/
  componentDidMount() {
    /**
     * 监测redux中状态的变化。即只要redux所保存的任何一个状态发生改变只要变化，都会调用回调，然后触发render，导致页面的刷新
     *
     * api3背景：redux只是管理状态，不负责刷新/更新页面 → 第3个api：subscribe
     *
     * store.subscribe(() => {
     *    // 箭头函数没有自己的this，但是componentDidMount是生命周期的钩子，生命周期钩子里面的this是组件的实例对象
     *    // ❌ 问题：自己主动调用render()不会刷新页面
     *    // this.render();
     *
     *    this.setState({});
     * });
     *
     * [✅最终解决方案] 解决方案：在index.js中检测redux状态变化
     */
  }

  /** ************************************************************* */
  /** ************************************************************* */

  /** ******************** 3.通知redux做加/减操作 *********************/
    // 加法操作
  increment = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;
    // const {count} = this.state;

    /**
     * 问题排查：调用dispatch方法后，页面上的“和”没有发生变化
     * 思路：在countReducer中打印prevState，发现，每点击一次“+”按钮，prevState就有变化
     *
     * 说明：以前使用setState能刷新页面的原因是👇🏻
     * this.setState作用:（1）能改状态；（2）能调render()
     *
     * this.setState({
     *    count: count + value * 1,
     * });
     *
     * 而redux只是管理状态，不负责页面重新绘制刷新。
     * [解决思路] 因此，需要检测redux中状态的变化，如果状态发生变化了，就自己调用render() → componentDidMount()
     */

    // 通知redux加value
    // 第2个api：dispatch -- 分发action，通知redux加value
    // ⚠️注意：redux中的状态的变化，不会引起页面的更新.（redux只是管理状态，不负责刷新/更新页面）
    store.dispatch({type: 'increment', data: value * 1});
  }

  // 减法操作
  decrement = () => {
    // 获取选择的数值
    const {value} = this.selectNumber;
    store.dispatch({type: 'decrement', data: value * 1});

    // const {count} = this.state;
    // this.setState({
    //   count: count - value * 1,
    // });
  }

  // 求和为奇数的时候，加法操作
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({type: 'increment', data: value * 1});
    }
  }

  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber;
    setTimeout(() => {
      store.dispatch({type: 'increment', data: value * 1});
    }, 500);
  }

  /** ************************************************************* */
  /** ************************************************************* */

  render() {
    return (
      <div>
        {/** ******************** 2 ******************** */}
        {/*<h1>当前求和为: {this.state.count}</h1>*/}
        {/* 由于我们已经把count状态交给了redux管理，所以这里需要找redux获取count状态 */}

        {/* 第1个api：store#getState() —— 读取redux中保存的值 */}
        <h1>当前求和为: {store.getState()}</h1>
        <select ref = {c => this.selectNumber = c}>
          <option value = {1}>1</option>
          <option value = {2}>2</option>
          <option value = {3}>3</option>
          <option value = {4}>4</option>
        </select>&nbsp;

        <button onClick = {this.increment}>加1</button>
        &nbsp;
        <button onClick = {this.decrement}>减1</button>
        &nbsp;
        <button onClick = {this.incrementIfOdd}>当和是奇数再加1</button>
        &nbsp;
        <button onClick = {this.incrementAsync}>异步加1</button>
      </div>
    );
  }
}
