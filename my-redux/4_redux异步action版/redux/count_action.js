import {DECREMENT, INCREMENT} from "./constants";
import store from './store';

/**
 * 该文件专门为Count组件生成action对象
 */

// 同步action，返回一个一般对象。即，同步action，就是指action的类型为Object类型的一般对象“Plain Object”。
export const createIncrementAction = data => ({type: INCREMENT, data});

export const createDecrementAction = data => ({type: DECREMENT, data});


// 异步action，需要返回一个函数。即，异步action，就是指action值的类型是函数类型
// createIncrementAsyncAction是一个方法
export const createIncrementAsyncAction = (data, time) => {

  /** *********************************************************************************************************** */
  // 下面返回的是一个函数
  // return () => {
  //   setTimeout(() => {
  //     // 此处需要通知redux 加data <-- 参考 component中的写法，通知redux 加/减data
  //     store.dispatch(createIncrementAction(data));
  //   }, time);
  // }

  // ❌上面👆🏻写法是错误的❌
  // [error_message]: Actions must be plain objects. Instead, the actual type was: 'function'.
  // You may need to add middleware to your store setup to handle dispatching other values,
  // such as 'redux-thunk' to handle dispatching functions.
  //
  // 即，action必须是一个Object类型的一般对象(Plain Object)。出错的地方是下面👇🏻的代码，
  // createIncrementAsyncAction返回的不是Object类型的一般对象 { ... }，而是一个函数，
  // 像createIncrementAction返回的是Object类型的一般对象(Plain Object)。
  //
  // 按照原来的写法：export default createStore(countReducer);
  // 从redux原理图上看到，action是先交给store，但store不认识函数类型的action，只认识plain object类型的对象，因此报错了。
  //
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // ✅解决方案：
  // 使用一个中间件，和store商量，允许给store传递函数类型的action(即，我们返回的函数被store拿到了)，
  // 但store不用把这个action交给reducer，(i.e. 先不让reducer处理这个action)，
  // 只需要store去执行下这个函数，等函数到了某个时机后(如，timer结束后)，再给store传递一个合法的一般对象类型的action。
  // 所以，middleware作用，让store可以接收一个函数类型的action，但不要将函数交给reducer让它干活，只需要帮忙执行一下函数就行
  //
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // 修改步骤：
  // （1）安装 redux-thunk库
  // （2）由于是要和store商量，让store可以接受一个函数类型的action，因此需要改动store.js文件
  /** *********************************************************************************************************** */
  /** *********************************************************************************************************** */

  /**************************************************************************************************************/
  // ✅ 正确的写法
  // 改动点1：修改“store.js”文件
  // 改动点2：修改“createIncrementAsyncAction”方法
  // ⚠️ 由于这个函数是store帮我们调用的，store会帮我们传dispatch进来，因此我们就不用import store使用store.dispatch()方式了
  return (dispatch) => {
    setTimeout(() => {
      // 时间到了，通知redux处理data.

      // 异步action中一般都会调用同步action
      // store.dispatch(createIncrementAction(data));
      // 优化👆🏻写法：由于这个函数是store帮我们调用的，store会帮我们传dispatch进来，因此我们就不用import store使用store.dispatch()方式了

      // ✅优化后
      dispatch(createIncrementAction(data));
    }, time);
  }
  // 因为函数中可以开启异步任务
}
