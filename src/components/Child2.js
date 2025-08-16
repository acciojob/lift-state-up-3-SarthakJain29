import React from "react";

function Child2({updateOption}){
    return (
        <div>
            <h2>Child Component 2</h2>
            <button onClick={()=>updateOption("Option 2")}>Option 2</button>
        </div>
        
        
    )
}
export default Child2;