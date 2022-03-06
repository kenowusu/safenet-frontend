import {useEffect,useState} from 'react';

import Image from 'next/image';


//==============import svg images ==============================//
import SearchSvg from '/public/icons/options/options-search.svg';
import ImportSvg from '/public/icons/options/options-import.svg';
import UserSvg from '/public/icons/options/options-user.svg';

//=============import components ==========================//
import AccountDropDown from '../dropdown/accountDropDown';

const Header = () => {
    const [showHeaderDropdown,setShowHeaderDropdown] = useState(false);
    
    const toggleHeader = (e)=>{
        setShowHeaderDropdown(!showHeaderDropdown);
    }
    
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
                         <button onClick={toggleHeader} className="header-options-userc header-options-userc-btn  flex justify-center items-center relative"
                            data-toggle="dropdown" data-target="user-options-dropdown" >
                            <UserSvg />
                            {/* account dropdown component */}
                            {(showHeaderDropdown)? <AccountDropDown/>:null}
                         </button>
                     </div>
                 </div>          
                 
            </div> {/* .header  container*/}
           
        </div>
     );
}
 
export default Header;