import {useRef} from "react";

const Some = (props) => {
  const inputRef = useRef();

  const clickHandler = () => {
    // 点击按钮，获取input输入框中的文案
    console.log(inputRef.current.value);
  };

  /**
   * 问题描述：现在只在Some组件中通过inputRef获取input输入框中的内容，但现在我想在App（即，Some的父组件）中获取input输入框内容
   */

  return (
    <div>
      <h2>Some</h2>
      <input ref={inputRef} type = "text"/>
      <button onClick={clickHandler}>Some button</button>
    </div>
  )
}

export default Some;
