// 引入createStore，专门用于创建redux中最核心的store对象
import {createStore, applyMiddleware, combineReducers} from 'redux';
// 引入为Count组件服务的reducer
import countReducer from './reducers/count';
// 引入为Person组件服务的reducer
import {personReducer} from "./reducers/person";
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';


/**
 * ❌ 有问题 ❌
 * export default createStore(countReducer, applyMiddleware(thunk));
 * 👆🏻上面写法会导致personReducer无法运行
 */



/**
 * export default createStore(countReducer, personReducer, applyMiddleware(thunk));
 *
 * ❌ 错误信息：
 * Uncaught Error: It looks like you are passing several store enhancers to createStore(). This is not supported.
 * Instead, compose them together to a single function.
 * 即，不能传多个参数
 */



/**
 * 如果有多个reducers，redux保存的总状态应该是一个对象。我们在使用的时候，根据key，就可以取出value
 *    {
 *        key1:he，value:-1
 *        key2:peiqi，value:[{id: "001", name: "张三", age: 10}]
 *    }
 *
 * ✅✅ 正确写法 ✅✅
 * 引入combineReducers
 *   （1）combineReducers作用：合并多个reducer。即，汇总所有的reducer变为一个总的reducer
 *   （2）redux帮我们保存的总状态是一个对象
 *   （3）combineReducers传入的对象就是redux帮我们保存的总状态对象
 */
const allReducers = combineReducers({
  he: countReducer, // key-value形式，value就是谁以后能初始化/加工
  peiqi: personReducer,
});

export default createStore(allReducers, applyMiddleware(thunk));


/**
 * ❌ 错误信息：
 * Uncaught Error: Objects are not valid as a React child (found: object with keys {sum, persons}).
 * If you meant to render a collection of children, use an array instead.
 * 即，Object是不能作为一个节点的，即要把一个对象往页面上放。上面代码就是合并了reducer，导致redux中保存的总状态就是一个对象了，以前是一个数值或者...
 *
 * 修改点：见使用的地方 containers/Count/index.jsx
 */
