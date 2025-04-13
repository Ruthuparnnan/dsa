import "./styles.css";
import { useState, useRef, useEffect } from "react";
const INPUT_BOXES_COUNT = 6;

export default function App() {
  const inputRef = useRef([]);
  const [inputArray, setInputArray] = useState(
    Array.from({ length: INPUT_BOXES_COUNT })
  );
  const handleInputChange = (value, index) => {
    if (value !== "" && !isNaN(value)) {
      const newValue = value?.trim();
      const lastInput = newValue?.slice(-1);
      const inputArrayCopy = [...inputArray];
      inputArrayCopy[index] = lastInput;
      setInputArray(inputArrayCopy);

      // focusing next inputBox
      newValue && inputRef.current[index + 1]?.focus();
    }
  };

  const handleOnKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  return (
    <div className="App container">
      <div className="container">
        {inputArray?.map((inputBox, index) => (
          <input
            key={index}
            className="input"
            value={inputArray[index]}
            ref={(input) => (inputRef.current[index] = input)}
            onChange={(event) => handleInputChange(event.target.value, index)}
            onKeyDown={(event) => handleOnKeyDown(event, index)}
          />
        ))}
      </div>
    </div>
  );
}
