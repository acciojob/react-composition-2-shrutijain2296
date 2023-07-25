// import React, {useState} from "react";
// import Child from "./Child";

// const Model = () =>{
//     let[show, setShow] = useState(false);

//     function showChild(){
//         setShow(true);
//     }


//     return(
//         <div className = "model-overlay">
//             <button onClick={showChild}>Show Modal</button>
//             <Child  show = {show} setShow = {setShow}/>
//         </div>
//     )
// }
// export default Model;


import React,{ useState } from "react";
 
const Modal = ({show, onClose, children}) =>{
 
    if(!show){
      return null;
    }
 
    return (
      <div className="modal-overlay" onClick={onClose}>
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
          {children}
      </div>
    );
};
 
export default Modal;