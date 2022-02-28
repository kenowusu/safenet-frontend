import {useEffect} from 'react';
//==============svg images ====================//

//========import components===========//
import SortDropDown from '../dropdown/sortDropdown';

import SortSvg from '../../public/icons/options/options-sort.svg';

const Sort = () => {

    const toggleDropdown = (e) =>{
 
         e.stopPropagation();
        //==get current dropdownId
        const dropdownId = e.target.getAttribute('data-target');
        console.log(dropdownId)

        // //==select current dropdown with dropdownId
        const dropdown = document.querySelector(`#${dropdownId}`);
        console.log(dropdown)

        // //===toggle class on targeted dropdown
        dropdown.classList.toggle('dropdown__show');

    }
        
    return ( 
        <div className="sort">

            <div className="sort-container flex  items-center ">

              <p className="sort-text">Passwords</p>

              <div className="sort-option flex justify-end items-center">
                  <button className="sort-option-imgc sort-option-btn flex justify-center items-center relative ">
                      {/* <SortSvg/> */}
                      <p className="sort-option-text" onClick={toggleDropdown} data-toggle="dropdown"
                       data-target="dropdown-sort">Sort</p>
                      <SortDropDown/>
                   </button>
                  
              </div>{/*sort option*/}

            </div>{/*sort-container */}

        </div>
     );
}
 
export default Sort;