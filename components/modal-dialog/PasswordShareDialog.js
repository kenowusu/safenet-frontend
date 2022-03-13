import {useContext} from 'react';



//============import password context==============//
import { PasswordContext } from "../../contexts/PasswordContext";






const PasswordShareDialog = () => {

    // const {deletePassword,setShowDialog} =  useContext(PasswordContext)


    return ( 

        <div className="modal modal__dialog modal__dialog__alert " >
            <div className="modal-container">
                {/* modal-content */}
                <div className="modal-content"  >


                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title">Share Password</span>
                    </div>

                    
                    {/* modal-body */}
                    <div className="modal-body scroll-beautify">
                      

                         
                       <p>Send Password?</p>
                  
                      


                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer flex justify-center items-center">
                        <div className="flex w-full h-full justify-end items-center pr-4">
                            
                            <button className="btn btn__grey mr-5" >Cancel</button>
                            <button className="btn btn__leave" >Send</button>
                        </div>
                      
                   


                    </div>
                     {/* modal footer */}
               
                </div>
            </div>
        </div>
     );

 

}
 
export default PasswordShareDialog;