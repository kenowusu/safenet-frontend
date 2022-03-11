import {useState,useContext, useEffect} from 'react';
import { PasswordContext } from '../../contexts/PasswordContext';
import {v4 as uuid} from 'uuid';


//===================import svg images =================//
import AddFolderSvgImage from '../../public/icons/options/options-add-folder.svg';
import FolderSvgImage from '../../public/icons/folder.svg';
import EditFolderSvgImage from '../../public/icons/options/options-edit.svg';




const FolderList = () => {


    const {setEditFolderIndex,
      setEditFolderId,
      setShowAddFolderModal,
      setShowEditFolderModal,
      folders,
      setFolders
    } = useContext(PasswordContext)




   //=========================edit folder =======================//
   const getEditFolder = async(e)=>{
      const target = e.target;
      
      for(let i = 0; i<5;i++){
        if(target.tagName == "BUTTON"){
          break;
        }
        target = target.parentNode;
      }
      
      const folder_id = target.getAttribute('fid');
      const Findex = folders.findIndex(item => item.id === folder_id);
      setEditFolderIndex(Findex);
      setEditFolderId(folder_id);
      setShowEditFolderModal(true);


      

      
      
   }

   const getFolders = async()=>{
    const api = process.env.NEXT_PUBLIC_API;
    const fetchUrl = `${api}/api/folders`;
    const fetchOptions = {
      method:"GET",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      }
    }

    const folderReq = await fetch(fetchUrl,fetchOptions);
    if(folderReq.status === 200){
      const folderRes = await folderReq.json();
      setFolders(folderRes.folders);
    }
   }
    useEffect(()=>{
      getFolders();
    },[])
    return ( 
         <>
            <label className="folder-title mr-5">Folder</label>
            <div className=" folder-select-container flex ">
                <p className="folder-select-title flex items-center">
                  <span className="w-full">Select Folder</span> 
                  <span onClick={(e)=>setShowAddFolderModal(true)} className='folder-select-icon'>
                    <AddFolderSvgImage/>
                  </span>
                </p>
               
                <div className='folder-select scroll-beautify '>
                  {folders.map((folder)=>{
                      return(
                        <div className='folder-option' key={uuid()}><span className='folder-option-name'>{folder.name}</span><button  onClick={getEditFolder} type="button" fid={folder.id} className='folder-option-btn'><EditFolderSvgImage/></button></div>
                      )
                  })}
                  
                </div>

               
            </div>
        </>
            
       
     );
}
 
export default FolderList;