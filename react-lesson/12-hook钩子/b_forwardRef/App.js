import {useState, useRef, useEffect} from "react";
import Some from "./Some";

const App = () => {
  const [count, setCount] = useState(1);

  const someRef = useRef();

  useEffect(() => {
    someRef.current.innerText = 'Some' + count;
  }, []);

  return (
    <div>
      <h1>App</h1>
      <h3>{count}</h3>
      <button onClick = {() => setCount(prevState => prevState + 1)}>点我</button>

      <Some ref={someRef}/>
    </div>
  )
}

export default App;