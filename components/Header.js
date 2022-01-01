import Image from 'next/image';
import search from '../public/icons/search.svg';

const Header = () => {
    return ( 
        <div className="header">
            <div className="searchbox  flex h-8 w-full rounded-md">
                <div className="searchbox__imgcont flex w-7 p-0.5"><Image src={search} alt="" className="searchbox__img" /></div>
                <input type="text"  className="searchbox__textbox w-full h-full rounded-md p-2"  placeholder="search my vault"/>
            </div>
        </div>
     );
}
 
export default Header;