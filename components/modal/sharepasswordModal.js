import {useState,useContext} from 'react';







const sharePasswordModal = () => {
    return ( 

        <div className="modal modal__dialog">
            <div className="modal-container">
                {/* modal-content */}
                <div className="modal-content"  >


                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title">Share Password</span>
                    </div>

                    
                    {/* modal-body */}
                    <div className="modal-body scroll-beautify">
                        <div className="flex flex-column flex-col p-8 pt-20">

                         
                            <input type="text" className="tbox tbox__border" placeholder='email' />
                  
                      

                        </div>

                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer">
                        

                      
                        <div className="flex w-full h-full justify-end items-center pr-4">
                            <button type="button" className="btn btn__grey mr-3" data-toggle="modal-dismiss" >Cancel</button>
                            <button type="submit"   className="btn btn__leave justify-self-start"
                            >Send</button>
                        </div>


                    </div>
                     {/* modal footer */}
               
                </div>
            </div>
        </div>
     );

 

}
 
export default sharePasswordModal;