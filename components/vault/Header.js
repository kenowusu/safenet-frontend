import {useEffect} from 'react';

import Image from 'next/image';


//==============import svg images ==============================//
import SearchSvg from '/public/icons/options/options-search.svg';
import ImportSvg from '/public/icons/options/options-import.svg';
import UserSvg from '/public/icons/options/options-user.svg';

//=============import components ==========================//
import AccountDropDown from '../dropdown/accountDropDown';

const Header = () => {
    
    useEffect(()=>{
        const sortOptionBtn = document.querySelector('.header-options-userc-btn');
        sortOptionBtn.addEventListener('click',e=>{
         
            e.stopPropagation();
            
            const openedDropdowns = document.querySelectorAll('.dropdown__show');
            /*
             Hide all opened dropdown and open/show current clicked dropdown
             Visit this again
            */
            openedDropdowns.forEach(openedDropdown=>{
                if(openedDropdown !== e.target){
                   openedDropdown.classList.remove('dropdown__show')
                }
                
            })
            sortOptionBtn.classList.toggle('dropdown__show')
        })
           
    },[]);  
    
    return ( 
        <div className="header">

             <div className="header-container">

                 <div className="header-searchbox">
                     <input type="text" className="header-searchbox-textbox" name="search" />
                     <label className="header-searchbox-imgc flex justify-center items-center" htmlFor="search" ><SearchSvg/></label>
                 </div>{/* searchbox container*/}

                 <div className="header-options">
                     <div className="header-options-container">
                         <button className="header-options-importc flex justify-center items-center"><ImportSvg/></button>
                         <button className="header-options-userc header-options-userc-btn flex justify-center items-center relative">
                          <UserSvg/>
                          <AccountDropDown/>
                         </button>
                     </div>
                 </div>          
                 
            </div> {/* .header  container*/}
           
        </div>
     );
}
 
export default Header;