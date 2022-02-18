import Image from 'next/image';
import SearchSvg from '../public/icons/search.svg';

const Header = () => {
    return ( 
        <div className="header">
            <div className="searchbox  flex  w-full rounded-md">
                <div className="searchbox__imgcont flex w-7 p-0.5"><SearchSvg/></div>
                <input type="text"  className="searchbox__textbox w-full h-full rounded-md p-2"  placeholder="search my vault"/>
            </div>
        </div>
     );
}
 
export default Header;