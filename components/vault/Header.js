import Image from 'next/image';


//==============import svg images ==============================//
import SearchSvg from '/public/icons/options/options-search.svg';
import ImportSvg from '/public/icons/options/options-import.svg';
import UserSvg from '/public/icons/options/options-user.svg';

const Header = () => {
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
                         <button className="header-options-userc flex justify-center items-center"><UserSvg/></button>
                     </div>
                 </div>          
                 
            </div> {/* .header  container*/}
           
        </div>
     );
}
 
export default Header;