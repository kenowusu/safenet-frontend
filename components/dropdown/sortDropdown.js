import {useEffect} from 'react'

//============import svg images ================//
import FolderSvgImage from '../../public/icons/options/options-folder.svg';
import NameSvgImage from '../../public/icons/options/options-name-tag.svg';
import RecentSvgImage from '../../public/icons/options/options-recent.svg';



const SortDropDown = () => {
   
    return ( 
        <div className="dp absolute ">
            <div className="dp-container">
                
                <div className="dp-head"><span>Sort By</span></div>

                <div className="dp-option">
                    <div className="dp-option-item"><span className="dp-option-item-icon icon-folder"><FolderSvgImage/></span><span className="dp-option-item-text">Folder (a-z)</span></div>
                    <div className="dp-option-item"><span className="dp-option-item-icon icon-folder"><FolderSvgImage/></span><span className="dp-option-item-text">Folder(z-a)</span></div>
                    <div className="dp-option-item"><span className="dp-option-item-icon icon-name-tag"><NameSvgImage/></span><span className="dp-option-item-text">Name(a-z)</span></div>
                    <div className="dp-option-item"><span className="dp-option-item-icon icon-name-tag"><NameSvgImage/></span><span className="dp-option-item-text">Name(z-a)</span></div>
                    <div className="dp-option-item"><span className="dp-option-item-icon icon-recent"><RecentSvgImage/></span><span className="dp-option-item-text">Most Recent</span></div>

                </div>{/*dp-option */}
            
            </div>
            
        </div>
     );
}
 
export default SortDropDown;