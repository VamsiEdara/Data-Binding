import "./styles.css";
import { useState } from "react";

export default function App() {
  // REFER : https://medium.com/@jkc5186/data-binding-in-react-js-1de62284906f#:~:text=In%20React%2C%20data%20binding%20typically%20refers%20to%20the%20synchronization%20of,properties%20(props)%20and%20states.
  const [num, setNum] = useState(100);
  return (
    <div className="App">
      <h1>Data Binding</h1>
      <h2>{num}</h2>
      {/* button indicates js to html update  */}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click
      </button>
      <br />
      <br />
      {/* input indicates html to js update */}
      <input
        type="text"
        onChange={(event) => {
          let text = event.target.value;
          setNum(text);
        }}
      />
    </div>
  );
}
