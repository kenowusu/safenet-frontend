import {useEffect} from 'react'

//============import svg images ================//
import FolderSvgImage from '../../public/icons/options/options-folder.svg';
import NameSvgImage from '../../public/icons/options/options-name-tag.svg';
import RecentSvgImage from '../../public/icons/options/options-recent.svg';



const SortDropDown = () => {


    // useEffect(()=>{
    //  const sortShowItems = document.querySelectorAll('.dropdown-option-item__hide');
    //  const skipBtnForElements = document.querySelectorAll('.dropdown-title');

    //  skipBtnForElements.forEach((item)=>{
    //     item.addEventListener('click',(e)=>{
    //         e.stopPropagation();
    //     })
    //  })
    //  sortShowItems.forEach((sortShowItem)=>{
    //      sortShowItem.addEventListener('click',(e)=>{
    //          e.stopPropagation();
    //          console.log('ok')
    //      })
    //  })

     
    // window.addEventListener('click',(e)=>{
    //     let openedDropdown =  document.querySelector('.sort-option-btn.dropdown__show');
        
    //        console.log(openedDropdown)
    //        if(openedDropdown){
    //         openedDropdown.classList.remove('dropdown__show');
    //        }
  
       
    //     })
    // },[]);



   
    return ( 
        <div className="dropdown  absolute ">
            <div className="dropdown-container">
                
                <div className="dropdown-title"><span>Sort By</span></div>

                <div className="dropdown-option">
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text">Folder (a-z)</span></div>
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text">Folder(z-a)</span></div>
                    <div className="dropdown-option-item dropdown-option-item__hide"><span className="dropdown-option-item-text">Name(a-z)</span></div>
                    <div className="dropdown-option-item dropdown-option-item__show"><span className="dropdown-option-item-text">Name(z-a)</span></div>
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text">Most Recent</span></div>

                </div>{/*dropdown-option */}
            
            </div>
            
        </div>
     );
}
 
export default SortDropDown;