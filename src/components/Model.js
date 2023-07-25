import React, {useState} from "react";
import Child from "./Child";

const Model = () =>{
    let[show, setShow] = useState(false);

    function showChild(){
        setShow(true);
    }


    return(
        <div className = "model-overlay">
            <button onClick={showChild}>Show Modal</button>
            <Child  show = {show} setShow = {setShow}/>
        </div>
    )
}
export default Model;