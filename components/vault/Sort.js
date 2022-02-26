import {useEffect} from 'react';
//==============svg images ====================//

//========import components===========//
import SortDropDown from '../dropdown/sortDropdown';

import SortSvg from '../../public/icons/options/options-sort.svg';

const Sort = () => {

    // useEffect(()=>{
    //  const sortOptionBtn = document.querySelector('.sort-option-btn');
    //  sortOptionBtn.addEventListener('click',e=>{
    //      e.stopPropagation();

         
    //      const openedDropdowns = document.querySelectorAll('.dropdown__show');
    //      /*
    //       Hide all opened dropdown and open/show current clicked dropdown
    //       Visit this again
    //      */
    //      openedDropdowns.forEach(openedDropdown=>{
    //          if(openedDropdown !== e.target){
    //             openedDropdown.classList.remove('dropdown__show')
    //          }
             
    //      })
    //      sortOptionBtn.classList.toggle('dropdown__show')
    //  })


    //  window.addEventListener('click',(e)=>{
    //     let openedDropdown =  document.querySelector('.header-options-userc-btn.dropdown__show');
        
    //        console.log(openedDropdown)
    //        if(openedDropdown){
    //         openedDropdown.classList.remove('dropdown__show');
    //        }
  
       
    //     })
        
          
        

         
    // },[])
    return ( 
        <div className="sort">

            <div className="sort-container flex  items-center ">

              <p className="sort-text">Passwords</p>

              <div className="sort-option flex justify-end items-center">
                  <button className="sort-option-imgc sort-option-btn flex justify-center items-center relative ">
                      {/* <SortSvg/> */}
                      <p className="sort-option-text">Sort</p>
                      <SortDropDown/>
                   </button>
                  
              </div>{/*sort option*/}

            </div>{/*sort-container */}

        </div>
     );
}
 
export default Sort;