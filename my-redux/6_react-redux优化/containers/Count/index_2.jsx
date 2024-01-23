// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";


/************ 优化点1-3：精简mapDispatchToProps ***********/
const CountContainer = connect(
  state => ({count: state}),
  /**
   * 优化后：mapDispatchToProps的对象形式
   *
   * 虽然此处我们只写了一个创建action的方法，没有自己写dispatch，但react-redux会帮我们自动做dispatch分发操作
   */
  {
    add: createIncrementAction,
    minus: createDecrementAction,
    addAsync: createIncrementAsyncAction,
  }
)(CountUI);


/**
 * 现状：mapDispatchToProps一般写法
 *
 * 传给UI组件一个add，这个add是一个函数。在UI组件中，通过this.props.add(value*1)调用的add方法。
 * 然后dispatch分发给store，store再交给reducer
 */
// dispatch => ({
//    add: (number) => {
//        dispatch(createIncrementAction(number));
//    },
//    minus: number => dispatch(createDecrementAction(number)),
//    addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
// })


export default CountContainer;

