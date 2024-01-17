import React from "react";
import store from "../../redux/store";
import {DECREMENT, INCREMENT} from "../../redux/constants";

export default class Count extends React.Component {

  increment = () => {
    const {value} = this.selectNumber;
    store.dispatch({type: INCREMENT, data: value * 1});
  }

  decrement = () => {
    const {value} = this.selectNumber;
    store.dispatch({type: DECREMENT, data: value * 1});
  }

  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({type: INCREMENT, data: value * 1});
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber;
    setTimeout(() => {
      store.dispatch({type: INCREMENT, data: value * 1});
    }, 500);
  }

  render() {
    return (
      <div>
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
    )
  }
}