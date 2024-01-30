import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";

/**
 * UI组件
 */
class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id: nanoid(), name, age};

    // console.log(personObj);
    this.props.addPersonXxx(personObj);

    // 清空输入框数据
    this.nameNode.value = '';
    this.ageNode.value = '';
  }

  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        {/* Person组件中，读取“求和结果” */}
        <h4>Count组件求和为：{this.props.sumXxx}</h4>
        <input ref = {c => this.nameNode = c} type = "text" placeholder = "输入名字"/>
        <input ref = {c => this.ageNode = c} type = "text" placeholder = "输入年龄"/>
        <button onClick = {this.addPerson}>添加</button>
        <ul>
          {
            this.props.pXxx.map((item) => {
              return <li key = {item.id}>{item.name}--{item.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
}


/**
 * 容器组件
 */
export default connect(
  /**
   * state => ({count: state}),
   * ❌ 👆🏻上面是错误的写法 ❌
   *
   * 错误信息：Uncaught Error: Objects are not valid as a React child (found: object with keys {sum, persons}).
   * If you meant to render a collection of children, use an array instead.
   * 即，因为在store.js中，写了combineReducers合并reducer逻辑，且 Object是不能作为一个节点的（即要把一个对象往页面上放），所以这里写法不对
   */

  /**
   * ✅ 正确的写法 ✅
   *
   * 说明：此处的“state”是redux帮你保存的总状态对象
   */
  state => ({pXxx: state.peiqi, sumXxx: state.he}), // 映射状态
  {addPersonXxx: createAddPersonAction}, // 映射操作状态的方法
)(Person);