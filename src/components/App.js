
// import React from "react";
// import './../styles/App.css';
// import Model from "./Model";

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//         <Model />
//     </div>
//   )
// }

// export default App
import React,{useState} from "react";
import './../styles/App.css';
import Modal from "./Model";
 
const App = () => {
  const [showModal, setModalShow] = useState(false);
 
  function handleCloseModal() {
    setModalShow(false);
  }
 
  return (
    <div id="main">
       <button onClick={()=>setModalShow(true)}>Open Modal</button>
       <Modal show={showModal} onClose={handleCloseModal}>
          <div className="modal">
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
          </div>
       </Modal>
    </div>
  )
}
 
export default App
