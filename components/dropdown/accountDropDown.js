import {useEffect} from 'react';
import Cookies from 'universal-cookie';
import {Router, useRouter} from 'next/router';

//============import svg images ================//
import FolderSvgImage from '../../public/icons/options/options-folder.svg';
import NameSvgImage from '../../public/icons/options/options-name-tag.svg';
import RecentSvgImage from '../../public/icons/options/options-recent.svg';



const AccountDropDown = () => {
 


    // useEffect(()=>{
    //     const sortShowItems = document.querySelectorAll('.dropdown-option-item__hide');
    //     const skipBtnForElements = document.querySelectorAll('.dropdown-title');
   
    //     skipBtnForElements.forEach((item)=>{
    //        item.addEventListener('click',(e)=>{
    //         //    e.stopPropagation();
    //        })
    //     })
    //     sortShowItems.forEach((sortShowItem)=>{
    //         sortShowItem.addEventListener('click',(e)=>{
    //             // e.stopPropagation();
    //             console.log('ok')
    //         })
    //     })
    //    },[])
    
    //===============logout =============//

    const logout = ()=>{
       
        const cookies = new Cookies();
        //clear cookie and redirect to '/login'
        cookies.set('tk','');
        window.location.href = '/login';
        
    }


   
    return ( 
        <div className="dropdown  account-dropdown absolute ">
            <div className="dropdown-container">
                
                <div className="dropdown-title"><span>Accout</span></div>

                <div className="dropdown-option">
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text">Settings</span></div>
                    <div className="dropdown-option-item" onClick={logout}><span className="dropdown-option-item-text">Logout</span></div>
                
                </div>{/*dropdown-option */}
            
            </div>
            
        </div>
     );
}
 
export default AccountDropDown;