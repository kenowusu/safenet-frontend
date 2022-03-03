import {useContext} from 'react';



//============import password context==============//
import { PasswordContext } from "../../contexts/PasswordContext";






const Dialog = () => {

    const {deletePassword,setShowDialog} =  useContext(PasswordContext)


    return ( 

        <div className="modal modal__dialog modal__dialog__alert " onClick={()=>setShowDialog(false)}>
            <div className="modal-container">
                {/* modal-content */}
                <div className="modal-content" onClick={(e)=>e.stopPropagation()} >


                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title">Delete Password</span>
                    </div>

                    
                    {/* modal-body */}
                    <div className="modal-body scroll-beautify">
                      

                         
                       <p>Are you sure you want to delete password?</p>
                  
                      


                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer flex justify-center items-center">
                        <div className="flex w-full h-full justify-end items-center pr-4">
                            
                            <button className="btn btn__grey mr-5" onClick={()=> setShowDialog(false)}>Cancel</button>
                            <button className="btn btn__danger" onClick={deletePassword}>Confirm</button>
                        </div>
                      
                   


                    </div>
                     {/* modal footer */}
               
                </div>
            </div>
        </div>
     );

 

}
 
export default Dialog;