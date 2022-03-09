import {useContext} from 'react';



//============import password context==============//
import { PasswordContext } from "../../contexts/PasswordContext";






const ImportSuccessfulDialog = () => {

    const {setShowImportSuccessfulDialog} =  useContext(PasswordContext)


    return ( 

        <div className="modal modal__dialog modal__dialog__alert " onClick={()=>setShowImportSuccessfulDialog(false)}>
            <div className="modal-container">
                {/* modal-content */}
                <div className="modal-content" onClick={(e)=>e.stopPropagation()} >


                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title">Password Import</span>
                    </div>

                    
                    {/* modal-body */}
                    <div className="modal-body scroll-beautify">
                      

                         
                       <p>Password Import was successful</p>
                  
                      


                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer flex justify-center items-center">
                        <div className="flex w-full h-full justify-end items-center pr-4">
                            
                            <button className="btn btn__grey mr-5" onClick={()=> setShowImportSuccessfulDialog(false)}>OK</button>
        
                        </div>
                      
                   


                    </div>
                     {/* modal footer */}
               
                </div>
            </div>
        </div>
     );

 

}
 
export default ImportSuccessfulDialog;