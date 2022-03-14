import {useState,useContext} from 'react';
import isEmail from 'validator/lib/isEmail';
 //==================import contexts ==============//
 import { PasswordContext } from '../../contexts/PasswordContext';


//=============import components ================//
// import PasswordShareDialog from '../modal-dialog/PasswordShareDialog';




const SharePasswordModalOptions = ()=>{
    const {hideSharePasswordModal,sharePassword}     = useContext(PasswordContext);      
  return(
     <>
        <button type="button" className="btn btn__grey mr-3" data-toggle="modal-dismiss" 
        onClick={hideSharePasswordModal}>Cancel</button>
        <button type="submit"   className="btn btn__leave justify-self-start"
        onClick={sharePassword}>Send</button>
     </>
  )


}
const SharePasswordModal = () => {
    const shareSuccessText = "Password has been shared successfully";
    const {hideSharePasswordModal,editPassword,editPassId,shareErr,shareEmail,setShareEmail,passIsShared,setIsPasswordIsShared} = useContext(PasswordContext);
    const API = process.env.NEXT_PUBLIC_API;
    //=============set states===============
    const [email,setEmail] = useState('');
    
   


    const {
        showPasswordModal,
        setShowPasswordModal
     } = useContext(PasswordContext); 


   

   const hidePasswordModal = (e)=>{
     setShowPasswordModal(false);
   
   }


    
    return ( 
       <> 
        {/* <PasswordShareDialog/> */}
        <div className="modal modal__dialog" onClick={hidePasswordModal}>
            <div className="modal-container">
                {/* modal-content */}
                <div className="modal-content" onClick={(e)=>e.stopPropagation()} >


                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title" >Share Password</span>
                    </div>

                    
                    {/* modal-body */}
                    <div className="modal-body scroll-beautify">
                        <div className="flex flex-column flex-col p-8 pt-20">

                            <div id="valErr" style={{color:"red",padding:"0 0px  15px 150px","fontSize":".9rem","fontWeight":"bold"
                        
                             }}>{shareErr}</div>
                             
                          {(!passIsShared) ? <input type="text" className="tbox tbox__border" placeholder='email' value={shareEmail} onChange={e=>setShareEmail(e.target.value)}/>: shareSuccessText}
                  
                      

                        </div>

                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer">
                    <div className="flex w-full  justify-end items-center pr-4">
                             {(!passIsShared)?<SharePasswordModalOptions/> : <button className='btn btn__grey' onClick={hideSharePasswordModal}>Close</button>}
                             </div>
                    </div>
                     {/* modal footer */}
               
                </div>
            </div>
        </div>
        </>
     );

 

}
 
export default SharePasswordModal;