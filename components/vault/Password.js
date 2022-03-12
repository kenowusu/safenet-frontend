import {useState,useContext,useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import Cookies from 'universal-cookie';
const cookie = require('cookie')

//=======================svg images =========//


//=========import components ====================//
import PasswordOptDropdown from '../dropdown/passwordOptDropdown';
import AddPasswordModal from '../modal/addPasswordModal';
import SharePasswordModal from '../modal/sharepasswordModal';
import DeleteDialog from '../modal-dialog/DeleteDialog';
import ImportPasswordModal from '../modal/importPasswordModal';
import ImportSuccessfulDialog from '../modal-dialog/ImportSuccessfulDialog';
import AddFolderModal from '../folder/AddFolderModal';
import EditFolderModal from '../folder/EditFolderModal';

//==============import contexts============//
import {PasswordContext} from '../../contexts/PasswordContext';
import EditPasswordModal from '../modal/editPasswordModal';

import sharePasswordModal from '../modal/sharepasswordModal';


const Password = () => {
    const api = process.env.NEXT_PUBLIC_API;

    //========set states=================//
     //==== use contexts=======//
     const {
         passwords,
         viewPassword,
         editPass,
         isEditForm,
         showDialog,
         showSharePasswordModal,
         showAddPasswordModal,
         showImportPasswordModal,
         showImportSuccessfulDialog,
         showAddFolderModal,
         showEditFolderModal
        } = useContext(PasswordContext);

    
    //===================use effect ================//
    useEffect(()=>{
        //==============hide all dropdowns when body is clicked============//
        document.body.addEventListener('click',()=>{
            const shownDropdowns = document.querySelectorAll('.dropdown');
            shownDropdowns.forEach((shownDropdown)=>{
                
                if(shownDropdown.classList.contains('dropdown__show')){
                    shownDropdown.classList.remove('dropdown__show');
                }
            })
        })
    },[]);
    

   const showPasswordOptions = (e)=>{
      e.stopPropagation();

      //==========hide all shown dropdowns leaving and show current one==========//
     //find all elements with dropdown show
        const allShownDropdowns = document.querySelectorAll('.dropdown__show');
        const getCurrentId = e.target.getAttribute('data-target');
        const shownDropdowns = Array.prototype.slice.call(allShownDropdowns).filter(shownDropdown=>{
            return getCurrentId !== shownDropdown.getAttribute('id');
        })
        shownDropdowns.forEach(openedDropdown=>{
            openedDropdown.classList.remove('dropdown__show');
        })
        
      //=========show current password dropdown===============
      let passwordDropdownButton = e.target;
      let passwordDropdown = passwordDropdownButton.childNodes[1];
      passwordDropdown.classList.toggle('dropdown__show');
   }

    return ( 
      <>     
            

            {/* modal dialog */}
            {(showDialog)? <DeleteDialog/> : null  }

         
            {/*add password modal  component*/}
            {(showAddPasswordModal)? <AddPasswordModal/> : null}  
              
             {/*view/edit password modal component*/}
             {(isEditForm)? <EditPasswordModal /> : null  }

             {/* share password modal */}
             {(showSharePasswordModal)? <SharePasswordModal/> : null  }
            
            
             {/* share password modal */}
             {(showImportPasswordModal)? <ImportPasswordModal/> : null}

             {(showImportSuccessfulDialog) ? <ImportSuccessfulDialog/> : null}


             {(showAddFolderModal) ? <AddFolderModal/> : null}
            
             {(showEditFolderModal) ? <EditFolderModal/> : null}

             
            <div className="password ">
                <div className="password-container">
                    <table className="password-table">
                            <thead  className="password-table-tbh">
                                <tr className="password-table-tbh-tr">
                                    <td className='password-table-tbh-tr-td name'>Name</td>
                                    <td className='password-table-tbh-tr-td folder'>Folder</td>
                                    <td className='password-table-tbh-tr-td options'></td>
                                </tr>
                            </thead>


                            <tbody>
                                {/* list passwords */}
                                {passwords.map(password=>{
                                    let passwordtargetid = `pass${uuid()}`;
                                    let showPasswordDropdown = false;

                                    return(
                                        <tr className="password-item-tr" passid={password.id} key={passwordtargetid} onClick={viewPassword} >
                                        
                                            <td className="password-item-td-name"  >
                                                    <span className="password-item-td-name-name">{password.name}</span>
                                                    <span className='password-item-td-username'>{password.username}</span>
                                            </td>
                                            <td className="password-item-td-folder">{(password.folder)? password.folder.name : ""}</td>
                                            <td className="password-item-td-options">
                                                <button  onClick={showPasswordOptions} data-target={passwordtargetid} className='password-item-td-options-ellipse  password-item-td-options-ellipse-btn '>
                                                    ...

                                                    {/* password options component */}
                                                    <PasswordOptDropdown url={password.url} password={password.password} username={password.username} passid={password.id} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>


                    </table>
                
                </div>{/*password-container*/}


            </div>
      </>
     );
}
 
export default Password;