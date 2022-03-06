import { useEffect,useState,useContext } from "react";
import { PasswordContext } from "../../contexts/PasswordContext";






const AddPasswordModal = () => {
    //=========import contexts==============//
    const {passValErr,addPassword,setShowAddPasswordModal} = useContext(PasswordContext);
    
    const api = process.env.NEXT_PUBLIC_API;
    const [url,setUrl] = useState('');
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    

    const newPassword = {
        url,
        name,
        username,
        password
    }

    const addPasswordModal = (e)=>{
        e.preventDefault();
        addPassword(newPassword,setUrl,setName,setUsername,setPassword);
       
        
    }
 


    const hideAddPasswordModal = ()=>{
        setShowAddPasswordModal(false);
    }
  
    return ( 
        <div className="modal" id="addPasswordModal" onClick={hideAddPasswordModal}>
            <div className="modal-container">

                
                {/* modal-content */}
                <form className="modal-content" onClick={(e)=>e.stopPropagation()} onSubmit={addPasswordModal} >

                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title">Add Password</span>
                    </div>

                    
                    {/* modal-body */}
                    <div className="modal-body scroll-beautify">
                        <div className="flex flex-column flex-col p-8 pt-20">

                         
                              <div id="valErr" style={{color:"red",padding:"0 0px  15px 150px","fontSize":".9rem","fontWeight":"bold"
                            
                              }}>{passValErr}</div>

                              <div className="modal-form-group">
                                <label htmlFor="" className="mr-5 ">Url</label>
                                <div>
                                    <input className="tbox  tbox__border " type="text" 
                                    value={url} onChange={(e)=>setUrl(e.target.value)}
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
                            <button type="button" className="btn btn__grey mr-3" onClick={hideAddPasswordModal}>Cancel</button>
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
 
export default AddPasswordModal;