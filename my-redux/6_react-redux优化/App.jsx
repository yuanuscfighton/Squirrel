import React from "react";
import Count from "./containers/Count";

class App extends React.Component {
  render() {
    return (
      <div>
        <Count/>
      </div>
    );
  }
}

export default App;

/** ******************** 优化点：简化传递store的成本 ******************** */
// 原始写法
// （1）问题：如果有很多容器组件的话，需要分别给每个容器组件传store，
// （2）简化方案：见 index.js
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* 给容器组件传递store */}
//         <Count store = {store}/>
//         <Demo1 store = {store}/>
//         <Demo2 store = {store}/>
//         ... ... ... ...
//       </div>
//     );
//   }
// }