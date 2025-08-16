
import React, {useState} from "react";
import './../styles/App.css';
import Child1 from "./Child1.js";
import Child2 from "./Child2.js"

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const updateOption = (newOption) => {
    setSelectedOption(newOption);
  }
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <div className="child">
          <div className="child1">
            <Child1 updateOption={updateOption}/>
          </div>
          <div className="child2">
            <Child2 updateOption={updateOption}/>
          </div>
        </div>
        
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
