import React from "react";

function Child1({updateOption}){
    return (
        <div>
            <h2>Child Component 1</h2>
            <button onClick={()=>updateOption("Option 1")}>Option 1</button>
        </div>
        
        
    )
}
export default Child1;