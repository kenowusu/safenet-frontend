
import {useState,useContext,useEffect} from 'react';
import { object } from 'yup/lib/locale';


//=================import components====================//
import PasswordOptions from '../options/passwordOptions';
import { PasswordContext } from '../../contexts/PasswordContext';
import FolderList from '../folder/FolderList';
import TogglePasswordEye from '../TogglePasswordEye';




const EditPasswordModal = ({passwordData}) => {

   //==== use contexts=======//
   const {
            editPassId,
            editUrl,
            editName,
            editPassword,
            editUsername,
            setIsEditForm,
            passwords,
            editPassValErr,
            setEditPassValErr,
            setPasswords,
            folderId
        } 
    = useContext(PasswordContext);

     const api = process.env.NEXT_PUBLIC_API;
     const [passId,setPassId] = useState(editPassId);
     const [url,setUrl] = useState(editUrl);
     const [name,setName] = useState(editName);
     const [username,setUsername] = useState(editUsername);
     const [password,setPassword] = useState(editPassword);

   


     const hideEditModal = (e)=>{
        setIsEditForm(false)
    }

   
    const editSavedPassword = async(e)=>{
        e.preventDefault();

        const savedPasswordId = passId;
        const apiUrl = `${api}/api/passwords/password/${savedPasswordId}`;
        const data = {
            id:savedPasswordId,
            folder_id:folderId,
            url:url,
            name:name,
            username:username,
            password:password
        }
        const body = JSON.stringify(data);
        const reqOptions = {
            method:"PUT",
            credentials:'include',
            body:body,
            headers:{
                "Content-Type":"application/json"
            }
        }

        //========update password with=========//
        const passReq = await fetch(apiUrl,reqOptions);

    
        if(passReq.status == 200 || passReq.status == 422){
            const passRes = await passReq.json();
            if(passReq.status == 422){
                setEditPassValErr(passRes.message);
                return;
            }
            
            else if(passReq.status == 200){
                
                const updatedPasswordIndex = passwords.findIndex(obj=>obj.id == savedPasswordId)
                 
              
              //=================update passwords states=============//
              passwords[updatedPasswordIndex] = passRes.password
             
              setIsEditForm(false);
            }
          
        }
    }
   
     

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
                        
                          }}>{editPassValErr}</div>

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
                  
                          <div className="modal-form-group relative">
                            <label htmlFor="" className="mr-5 ">Password</label>
                            <div>
                                <input className="tbox  tbox__border " type="password"
                                value={password}  onChange={(e)=>setPassword(e.target.value)} />

                                  {/*Toggle Eye Password Component*/}
                                  <TogglePasswordEye/>
                            </div>
                            
                          </div>
                          

                            {/* FolderList Component*/}
                            <div className="folder modal-form-group">
                                <FolderList/>
                             </div>
                          
                      
                  

                    </div>

                </div>
                {/* modal-body */}


                
                {/* modal-footer */}
                <div className="modal-footer">
                     
                     {/* passowrd options component  */}
                     <PasswordOptions/> 


                    <div className="flex w-full h-full justify-end items-center pr-4">
                        <button type="button" className="btn btn__grey mr-3" data-toggle="modal-dismiss" onClick={hideEditModal} >Cancel</button>
                        <button type="submit"  onClick={editSavedPassword} className="btn btn__leave justify-self-start"
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