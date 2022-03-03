import {useState,useContext,useEffect} from 'react';
import {v4 as uuid} from 'uuid';
import Cookies from 'universal-cookie';
const cookie = require('cookie')

//=======================svg images =========//
import EllipseSvg from '../../public/icons/options-vertical.svg';
import PasswordShowSvg from '../../public/icons/eye-reveal.svg';

//=========import components ====================//
import PasswordOptDropdown from '../dropdown/passwordOptDropdown';
import AddPasswordModal from '../modal/addPasswordModal';
import editPasswordModal from '../modal/editPasswordModal';
import { array } from 'yup';


//==============import contexts============//
import {PasswordContext} from '../../contexts/PasswordContext';
import EditPasswordModal from '../modal/editPasswordModal';
import AddPassword from './addPassword';

const Password = () => {
    const api = process.env.NEXT_PUBLIC_API;

    //========set states=================//



     //==== use contexts=======//
     const {passwords,viewPassword,editPass,isEditForm} = useContext(PasswordContext);



   

  
    
    const toggleDropdown = (e) =>{
        e.stopPropagation();

        //find all elements with dropdown show
        const allShownDropdowns = document.querySelectorAll('.dropdown__show');

        const getCurrentId = e.target.getAttribute('data-target');
        
        const shownDropdowns = Array.prototype.slice.call(allShownDropdowns).filter(shownDropdown=>{
             return getCurrentId !== shownDropdown.getAttribute('id');
        })

        shownDropdowns.forEach(openedDropdown=>{
            openedDropdown.classList.remove('dropdown__show');
        })
       


        
             //==get current dropdownId
        const dropdownId = e.target.getAttribute('data-target');

        //==select current dropdown with dropdownId
        const dropdown = e.target.querySelector(`#${dropdownId}`);

        //===toggle class on targeted dropdown
        dropdown.classList.toggle('dropdown__show');
        
       

    }


    

    //===================use effect ================//
    useEffect(()=>{
       
       

        document.body.addEventListener('click',()=>{
            const shownDropdowns = document.querySelectorAll('.dropdown');
            shownDropdowns.forEach((shownDropdown)=>{
                
                if(shownDropdown.classList.contains('dropdown__show')){
                    shownDropdown.classList.remove('dropdown__show');
                }
            })
        })

  
    },[]);
    



    return ( 
      <>     

            {/*add password modal  component*/}
              <AddPasswordModal/>
              
             {/*view/edit password modal component*/}

             
             {(isEditForm)? <EditPasswordModal /> : null  }
              
              
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

                                    return(
                                        <tr className="password-item-tr" passid={password.id} key={passwordtargetid} onClick={viewPassword} >
                                        
                                            <td className="password-item-td-name"  >
                                                    <span className="password-item-td-name-name">{password.name}</span>
                                                    <span className='password-item-td-username'>{password.username}</span>
                                            </td>
                                            <td className="password-item-td-folder">{password.folder}</td>
                                            <td className="password-item-td-options">
                                                <button onClick={toggleDropdown} data-toggle="dropdown" data-target={passwordtargetid} className='password-item-td-options-ellipse  password-item-td-options-ellipse-btn '>
                                                    ...

                                                    {/* password options component */}
                                                    <PasswordOptDropdown passwordId={passwordtargetid}/>
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