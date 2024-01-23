import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
// 引入Provider
import {Provider} from "react-redux";
import store from "./redux/store";

/** ******************** 优化点：不需要自己监测redux中状态的变化 ******************** */
// 检测redux中的状态的改变，如redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(() => {
//   ReactDOM.render(<App/>, document.getElementById('root'));
// })

/**
 * 👆🏻此处可以省略store.subscribe()的原因是：
 *
 * 在使用react-redux之后，就不需要我们自己监听状态的变化了。因为所有逻辑都藏在了connect()()方法调用中了
 * 容器组件是通过connect()()创建出来的，此时容器组件就默认拥有了监测redux里面状态变化的能力。
 * 因此就不需要在index.js中写store.subscribe()逻辑了
 */

/***********************************************************************************/
/***********************************************************************************/

/**
 * 优化点：简化传递store的成本
 *
 * Provider拿到store后，会自己分析整个应用中的所有容器组件，把store精准的传给每个需要store的容器组件，
 * 即，只要是需要store的地方都能传过去（见App.jsx）
 */
ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);