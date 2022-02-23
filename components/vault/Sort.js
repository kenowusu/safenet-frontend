import {useEffect} from 'react';
//==============svg images ====================//

//========import components===========//
import SortDropDown from '../dropdown/sortDropdown';

import SortSvg from '../../public/icons/options/options-sort.svg';

const Sort = () => {

    useEffect(()=>{
        const sortButton = document.querySelector('.sort-option-imgc');
        console.log(sortButton)
         sortButton.addEventListener('click',(event)=>{
            sortButton.classList.toggle('show');
         })
    },[])
    return ( 
        <div className="sort">

            <div className="sort-container flex  items-center ">

              <p className="sort-text">Passwords</p>

              <div className="sort-option flex justify-end items-center">
                  <button className="sort-option-imgc flex justify-center items-center relative">
                      <SortSvg/>
                      <p className="sort-option-text">Sort</p>
                      <SortDropDown/>
                   </button>
                  
              </div>{/*sort option*/}

            </div>{/*sort-container */}

        </div>
     );
}
 
export default Sort;