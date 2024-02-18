import {useRef} from "react";

const Some = (props, ref) => {
  const inputRef = useRef();

  const clickHandler = () => {
    // 点击按钮，获取input输入框中的文案
    console.log(inputRef.current.value);
  };

  return (
    <div>
      {/* 演示forwardRef使用：使用后，就会把第h2对象，返回到App组件了 */}
      <h2 ref={ref}>Some</h2>
      <input ref={inputRef} type = "text"/>
      <button onClick={clickHandler}>Some button</button>
    </div>
  )
}

/**
 * 使用forwardRef包装后，可以通过forwardRef来指定要暴露给外部的ref，即，Some组件入参不但有props，而且还多出ref
 */
export default React.forwardRef(Some);

