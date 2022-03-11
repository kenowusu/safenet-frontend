import { fips } from 'crypto';
import {useState,useContext} from 'react';

 //==================import contexts ==============//
 import { PasswordContext } from '../../contexts/PasswordContext';




const AddFolderModal = ()=>{
    const {showAddFolderModal,setShowAddFolderModal} =  useContext(PasswordContext);
    const [folderErr,setFolderErr] = useState('');
    const [name,setName] = useState('');


    const saveFolder = async(e)=>{
        e.preventDefault();
        setFolderErr('');
        if(!name){
            setFolderErr('Please provide folder name');
            return;
        }

        const data = {
            name:name
        }
        const body = JSON.stringify(data);
        const api  = process.env.NEXT_PUBLIC_API;
        const fetchUrl = `${api}/api/folders`;
        const fetchOptions = {
            method:"POST",
            credentials:"include",
            body:body,
            headers:{
                "Content-Type":"application/json"
            }
        }
        
        //====fetch====================
        const folderReq = await fetch(fetchUrl,fetchOptions);

        if(folderReq.status == 200 ||  folderReq.status == 422){
          const folderRes = await folderReq.json();
          
          if(folderReq.status === 422){
              setFolderErr(folderRes.message);
              return 
          }
          if(folderReq.status === 200){
              setShowAddFolderModal(false);
          }
        }


    }
    return ( 
       <> 
        {/* <PasswordShareDialog/> */}
        <div className="modal modal__dialog" onClick={()=>setShowAddFolderModal(false)} >
            <div className="modal-container">
                {/* modal-content */}
                <div className="modal-content" onClick={(e)=>e.stopPropagation()} >


                    {/* modal-header */}
                    <div className="modal-header">
                        <span className="modal-title">Add Folder</span>
                    </div>

                    <div className='p-8'>
                        <div className="form-error">{folderErr}</div>
                    </div>
                    {/* modal-body */}
                    <div className="modal-body scroll-beautify">

                       
                        <div className="flex  p-8 items-center">
                          
                        
                               
                          <label htmlFor="" className='mr-5'>Name</label>
                          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="tbox tbox__border w-full"/>
                      

                        </div>

                    </div>
                    {/* modal-body */}


                    
                    {/* modal-footer */}
                    <div className="modal-footer">
                        <div className="flex w-full  justify-end items-center pr-4 ">
                        <button type="button" className="btn btn__grey mr-3" data-toggle="modal-dismiss" onClick={()=>setShowAddFolderModal(false)}>Cancel</button>
                        <button type="submit"   className="btn btn__leave justify-self-start"
                         onClick={saveFolder}>Save</button>
                        </div>
                    </div>
                     {/* modal footer */}
               
                </div>
            </div>
        </div>
        </>
     );

 

}
 
export default AddFolderModal;