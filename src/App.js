import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const Clear = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  const equalto = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("not valid");
    }
  };

  return (
    <div className="container">
      <form>
        <input value={result} className="" type="text" />
      </form>

      <div className="keypad">
        <button className="highlights" id="clear" onClick={Clear}>
          Clear
        </button>
        <button className="highlights" id="backSpace" onClick={backSpace}>
          C
        </button>

        <button className="highlights" name="/" onClick={handleClick}>
          &divide;
        </button>

        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="highlights" name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button className="highlights" name="-" onClick={handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button className="highlights" name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button className="highlights" id="result" onClick={equalto}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
