
import {useState,useContext,useEffect} from 'react';

import { PasswordContext } from '../../contexts/PasswordContext';








const EditPasswordModal = ({passwordData}) => {

   //==== use contexts=======//
   const {editUrl,editName,editPassword,editUsername,setIsEditForm} = useContext(PasswordContext);

     const api = process.env.NEXT_PUBLIC_API;
     const [url,setUrl] = useState(editUrl);
     const [name,setName] = useState(editName);
     const [username,setUsername] = useState(editUsername);
     const [password,setPassword] = useState(editPassword);

   


     const hideEditModal = (e)=>{
        setIsEditForm(false)
        console.log('yah! modal was hidden');
    }
     //edit password states===//
    


     // hide all modals onClick on modal
    useEffect(()=>{
     
        
   
       },[])
   
     

    return ( 

        <div className="modal" id="editPasswordModal" >
        <div className="modal-container" onClick={hideEditModal}>

            
            {/* modal-content */}
            <form className="modal-content" onClick={(e)=> e.stopPropagation()} >

                {/* modal-header */}
                <div className="modal-header">
                    <span className="modal-title">Password</span>
                </div>

                
                {/* modal-body */}
                <div className="modal-body scroll-beautify">
                    <div className="flex flex-column flex-col p-8 pt-20">

                     
                          <div id="valErr" style={{color:"red",padding:"0 0px  15px 150px","fontSize":".9rem","fontWeight":"bold"
                        
                          }}></div>

                          <div className="modal-form-group">
                            <label htmlFor="" className="mr-5 ">Url</label>
                            <div>
                                <input className="tbox  tbox__border " type="text" 
                                value={url}  onChange={(e)=>setUrl(e.target.value)}
                                />
                            </div>
                            
                          </div>

                          <div className="modal-form-group">
                            <label htmlFor="" className="mr-5 ">Name</label>
                            <div>
                                <input className="tbox  tbox__border " type="text" 
                                  value={name} onChange={(e)=>setName(e.target.value)}
                                />
                            </div>
                            
                          </div>

                          <div className="modal-form-group">
                            <label htmlFor="" className="mr-5 ">Username</label>
                            <div>
                                <input className="tbox  tbox__border " type="text"  
                                value={username}onChange={(e)=>setUsername(e.target.value)}/>
                            </div>
                            
                          </div>
                  
                          <div className="modal-form-group">
                            <label htmlFor="" className="mr-5 ">Password</label>
                            <div>
                                <input className="tbox  tbox__border " type="password"
                                value={password}  onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            
                          </div>
                  
                  

                    </div>

                </div>
                {/* modal-body */}


                
                {/* modal-footer */}
                <div className="modal-footer">
                    

                    <div className="flex w-full h-full justify-end items-center pr-4">
                        <button type="button" className="btn btn__grey mr-3" data-toggle="modal-dismiss" onClick={hideEditModal} >Cancel</button>
                        <button type="submit"   className="btn btn__leave justify-self-start"
                        >Save</button>
                    </div>
                {/* modal footer */}


                </div>
           
            </form>



        </div>
    </div>
     );
}
 
export default EditPasswordModal;