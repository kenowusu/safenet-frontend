import {useEffect,useContext} from 'react'


import sortArray from 'sort-array';

import {PasswordContext} from '../../contexts/PasswordContext';

//============import svg images ================//
import FolderSvgImage from '../../public/icons/options/options-folder.svg';
import NameSvgImage from '../../public/icons/options/options-name-tag.svg';
import RecentSvgImage from '../../public/icons/options/options-recent.svg';



const SortDropDown = () => {
   
    const {passwords,setPasswords} = useContext(PasswordContext);



   //============filter by most recents==============
   const filterByMostRecent = ()=>{
    const cpPasswords = [...passwords];
    const sortByMostRecent = sortArray(cpPasswords,{
        by:'created_at',
        order:'desc'
    })
    setPasswords(sortByMostRecent);
   }

   const filterByNameAz = ()=>{
    const cpPasswords = [...passwords];
    const sortByNameAz = sortArray(cpPasswords,{
        by:'name',
        order:'asc'
    })
    setPasswords(sortByNameAz);
   }

   const filterByNameZa = ()=>{
    const cpPasswords = [...passwords];
    const sortByNameZa = sortArray(cpPasswords,{
        by:'name',
        order:'desc'
    })
    setPasswords(sortByNameZa);
   }



   
    return ( 
        <div className="dropdown  dropdown__sort absolute " id="dropdown-sort">
            <div className="dropdown-container">
                
                <div className="dropdown-title"><span>Sort By</span></div>

                <div className="dropdown-option">
                    
                    {/* <div className="dropdown-option-item"><span className="dropdown-option-item-text">Folder (a-z)</span></div>
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text">Folder(z-a)</span></div> */}
                    <div onClick={filterByNameAz} className="dropdown-option-item dropdown-option-item__hide"><span className="dropdown-option-item-text">Name(a-z)</span></div>
                    <div onClick={filterByNameZa} className="dropdown-option-item dropdown-option-item__show"><span className="dropdown-option-item-text">Name(z-a)</span></div>
                    <div onClick={filterByMostRecent} className="dropdown-option-item"><span className="dropdown-option-item-text">Most Recent</span></div>

                </div>{/*dropdown-option */}
            
            </div>
            
        </div>
     );
}
 
export default SortDropDown;