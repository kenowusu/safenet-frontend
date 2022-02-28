import {useEffect} from 'react';

import Image from 'next/image';


//==============import svg images ==============================//
import SearchSvg from '/public/icons/options/options-search.svg';
import ImportSvg from '/public/icons/options/options-import.svg';
import UserSvg from '/public/icons/options/options-user.svg';

//=============import components ==========================//
import AccountDropDown from '../dropdown/accountDropDown';

const Header = () => {
    const toggleDropdown = (e) =>{
        e.stopPropagation();

        //==get current dropdownId
        const dropdownId = e.target.getAttribute('data-target');

        //==select current dropdown with dropdownId
        const dropdown = document.querySelector(`#${dropdownId}`);

        //===toggle class on targeted dropdown
        dropdown.classList.toggle('dropdown__show');

    }

    
    useEffect(()=>{
    

           
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
                         <button className="header-options-userc header-options-userc-btn  flex justify-center items-center relative"
                          data-toggle="dropdown" data-target="user-options-dropdown" onClick={toggleDropdown}>
                          <UserSvg onClick={(e)=> e.stopPropagation}/>
                          <AccountDropDown/>
                         </button>
                     </div>
                 </div>          
                 
            </div> {/* .header  container*/}
           
        </div>
     );
}
 
export default Header;