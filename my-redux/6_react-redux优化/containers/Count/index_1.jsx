// 1.引入Count的UI组件
import CountUI from '../../components/Count'
// 2.引入connect用于连接UI组件和redux
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

/************ 优化点1-1：编码角度的优化 ***********/
// 映射状态
// function mapStateToProps(state) {
//   return {count: state};
// }
const mapStateToProps = state => ({count: state})
/*******************************************/
/*******************************************/


// 映射操作状态的方法
// function mapDispatchToProps(dispatch) {
//   return {
//     add: (number) => {
//       dispatch(createIncrementAction(number));
//     },
//     minus: number => dispatch(createDecrementAction(number)),
//     addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
//   }
// }


/************ 优化点1-2：从编码角度，进一步简化“mapStateToProps”和“mapDispatchToProps” ***********/
const CountContainer = connect(
  state => ({count: state}),
  dispatch => (
    {
      add: number => dispatch(createIncrementAction(number)),
      minus: number => dispatch(createDecrementAction(number)),
      addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
    }
  )
)(CountUI);

export default CountContainer;

