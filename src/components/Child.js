import React from "react";


const Child = ({show, setShow}) =>{

   function close(){
    setShow(false);
   }

    return(
        <div>
            {
                 (show && (
                    <div className="child">
                        <button className="model-close" onClick = {close}>Close</button>
                        <p className="model-p">This is the content of the modal.</p>
                    </div>
                ))
            }
           
        </div>
    )
}
export default Child;