import {useState,useContext} from 'react';
import { PasswordContext } from '../../contexts/PasswordContext';



//===================import svg images =================//
import AddFolderSvgImage from '../../public/icons/options/options-add-folder.svg';
import FolderSvgImage from '../../public/icons/folder.svg';
import EditFolderSvgImage from '../../public/icons/options/options-edit.svg';




const FolderList = () => {
    const {setShowAddFolderModal} = useContext(PasswordContext)
    const [folders,setFolders] = useState(['Entertainment','Business','Sports','News','Svgs']);
    return ( 
         <>
            <label className="folder-title mr-5">Folder</label>
            <div className=" folder-select-container flex ">
                <p class="folder-select-title flex items-center">
                  <span class="w-full">Select Folder</span> 
                  <span onClick={(e)=>setShowAddFolderModal(true)} className='folder-select-icon'>
                    <AddFolderSvgImage/>
                  </span>
                </p>
               
                <div className='folder-select scroll-beautify '>
                  {folders.map((folder)=>{
                      return(
                        <div className='folder-option'><span className='folder-option-name'>{folder}</span><button type="button" className='folder-option-btn'><EditFolderSvgImage/></button></div>
                      )
                  })}
                  
                </div>

                {/* <button  className='folder-btn' type="button" >
                   <AddFolderSvgImage/>
                </button> */}
            </div>
        </>
            
       
     );
}
 
export default FolderList;