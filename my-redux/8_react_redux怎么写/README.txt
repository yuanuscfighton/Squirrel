
#react-redux编写步骤

第1步：创建containers/Count/index.jsx

    class Count extends React.Component {
      render() {
        return (
          <div>
            <h1>当前求和为: ？？？？？</h1>
          </div>
        );
      }
    }

“和”需要从redux中读取出来 → 引入react-redux、connect()()

第2步：import {connect} from "react-redux";
    映射状态 → {he:state}
    映射操作状态的方法
