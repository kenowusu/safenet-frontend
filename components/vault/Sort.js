import {useEffect,useState} from 'react';
//==============svg images ====================//

//========import components===========//
import SortDropDown from '../dropdown/sortDropdown';

import SortSvg from '../../public/icons/options/options-sort.svg';

const Sort = () => {
    
    const [showSortDropdown,setShowSortDropdown] = useState(false);



    const toggleSortDropdown = ()=>{

     //==========hide all show dropdowns==========//
      const shownDropdowns = document.querySelectorAll('.dropdown__show');
      shownDropdowns.forEach(openedDropdown=>{
            openedDropdown.classList.remove('dropdown__show');
        })
       
        setShowSortDropdown(!showSortDropdown);
    }
        
    return ( 
        <div className="sort" onClick={(e)=>e.stopPropagation()}>

            <div className="sort-container flex  items-center ">

              <p className="sort-text">Passwords</p>

              <div className="sort-option flex justify-end items-center">
                  <button  onClick={toggleSortDropdown} className="sort-option-imgc sort-option-btn flex justify-center items-center relative ">
                      {/* <SortSvg/> */}
                      <p className="sort-option-text"  data-toggle="dropdown"
                       data-target="dropdown-sort">Sort</p>
                      {/* sort dropdown component */}
                      {(showSortDropdown)?<SortDropDown/>:null}
                   </button>
                  
              </div>{/*sort option*/}

            </div>{/*sort-container */}

        </div>
     );
}
 
export default Sort;