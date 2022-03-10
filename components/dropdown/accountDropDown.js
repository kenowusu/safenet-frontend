import {useEffect} from 'react';
import Cookies from 'universal-cookie';
import { parse } from 'tldts';

//============import svg images ================//
import FolderSvgImage from '../../public/icons/options/options-folder.svg';
import NameSvgImage from '../../public/icons/options/options-name-tag.svg';
import RecentSvgImage from '../../public/icons/options/options-recent.svg';



const AccountDropDown = () => {
 


    useEffect(()=>{
        const logoutBtn = document.getElementById('logoutBtn');
        logoutBtn.addEventListener('click',()=>{
            logout();
        })
      },[])
    
    //===============logout =============//
    

    const logout = ()=>{
        const apiUrl = process.env.NEXT_PUBLIC_API;
        //set authentication token in cookie 
        const {domain} = parse(apiUrl)
        const cookieDomain = `.${domain}`;
        const cookieOptions = {
            domain:cookieDomain
        }
        const cookies = new Cookies();
        //clear cookie and redirect to '/login'
        cookies.set('tk','',cookieOptions);
        window.location.href = '/login';
        
    }


   
    return ( 
        <div className="dropdown  dropdown__useroptions absolute " id="user-options-dropdown">
            <div className="dropdown-container">
                
                <div className="dropdown-title"><span>Accout</span></div>

                <div className="dropdown-option">
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text">Settings</span></div>
                    <div className="dropdown-option-item" id="logoutBtn"><span className="dropdown-option-item-text">Logout</span></div>
                
                </div>{/*dropdown-option */}
            
            </div>
            
        </div>
     );
}
 
export default AccountDropDown;