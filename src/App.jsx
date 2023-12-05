import { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const celToFar = (e) => {
    const newCelsiusValue = e.target.value;
    setCelsius(newCelsiusValue);
    let output = (parseFloat(newCelsiusValue) * 9 / 5) + 32;
    setFahrenheit(parseFloat(output.toFixed(2)));
  }
  
  const farToCel = (e) => {
    const newFahrenheitValue = e.target.value;
    setFahrenheit(newFahrenheitValue);
    let output = (parseFloat(newFahrenheitValue) - 32) * 5 / 9;
    setCelsius(parseFloat(output.toFixed(2)));
  }

  return (
    <>
      <div className="container">
        <h2 className="title">Temperature Converter</h2>
        <p className="sub-title">
          Input the Number in either side & check the result! 😊
        </p>

        <div className="wrapper">
          <div className="input-group">
            <label htmlFor="celsius">Celsius</label>
            <input type="number" id="celsius" value={celsius} onChange={celToFar} />
          </div>
          <div className="input-group">
            <label htmlFor="fahrenheit">Fahrenheit</label>
            <input type="number" id="fahrenheit" value={fahrenheit} onChange={farToCel} />
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
