
//==============svg images ====================//

import SortSvg from '../../public/icons/options/options-sort.svg';

const Sort = () => {
    return ( 
        <div className="sort">

            <div className="sort-container flex  items-center">

              <p className="sort-text">Passwords</p>

              <div className="sort-option flex justify-end items-center">
                  <button className="sort-option-imgc flex justify-center items-center">
                      <SortSvg/>
                      <p className="sort-option-text">Sort</p>
                   </button>
                  
              </div>{/*sort option*/}

            </div>{/*sort-container */}

        </div>
     );
}
 
export default Sort;