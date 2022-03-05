import {useState,useContext} from 'react';
import isEmail from 'validator/lib/isEmail';
 //==================import contexts ==============//
 import { PasswordContext } from '../../contexts/PasswordContext';


//=============import components ================//
// import PasswordShareDialog from '../modal-dialog/PasswordShareDialog';


const sharePasswordModal = () => {
    const {editPassword,editPassId} = useContext(PasswordContext);
    const API = process.env.NEXT_PUBLIC_API;
    //=============set states===============
    const [email,setEmail] = useState('');
    const [shareErr,setShareErr] = useState('');


    const {
        showPasswordModal,
        setShowPasswordModal
     } = useContext(PasswordContext); 


   

    const hideSharePasswordModal = (e)=>{
        setShareErr('');
        setShowPasswordModal(false);
      }
    

    const sharePassword = async()=>{
        const apiUrl = `${API}/api/tools/share_password`;
        const data = {
            email,
            passwordId:editPassId
        }
        const body = JSON.stringify(data);
        const reqOptions = {
            method:"POST",
            body:body,
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            }

        }

        if(!isEmail(email)){
            setShareErr('Enter valid email');
            return;
        }    
        //================send password=======//
        const passReq = await fetch(apiUrl,reqOptions);

        if(passReq.status == 200 ||  passReq.status == 500){
            const passRes = await passReq.json();
            if(passReq == 500){
                return setShareErr(passRes.message)
            }
        }
        
    }
    
    return ( 
       <> 
        {/* <PasswordShareDialog/> */}
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

                            <div id="valErr" style={{color:"red",padding:"0 0px  15px 150px","fontSize":".9rem","fontWeight":"bold"
                        
                             }}>{shareErr}</div>
                            <input type="text" className="tbox tbox__border" placeholder='email' 
                            
                            onChange={e=>setEmail(e.target.value)}/>
                  
                      

                        </div>

                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer">
                        

                      
                        <div className="flex w-full h-full justify-end items-center pr-4">
                            <button type="button" className="btn btn__grey mr-3" data-toggle="modal-dismiss" 
                            onClick={hideSharePasswordModal}>Cancel</button>
                            <button type="submit"   className="btn btn__leave justify-self-start"
                            onClick={sharePassword}>Send</button>
                        </div>


                    </div>
                     {/* modal footer */}
               
                </div>
            </div>
        </div>
        </>
     );

 

}
 
export default sharePasswordModal;