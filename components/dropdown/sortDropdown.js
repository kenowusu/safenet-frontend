import {useEffect} from 'react'

//============import svg images ================//
import FolderSvgImage from '../../public/icons/options/options-folder.svg';
import NameSvgImage from '../../public/icons/options/options-name-tag.svg';
import RecentSvgImage from '../../public/icons/options/options-recent.svg';



const SortDropDown = () => {





   
    return ( 
        <div className="dropdown  dropdown__sort absolute " id="dropdown-sort">
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