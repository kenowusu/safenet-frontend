import Link from 'next/link';


//============svg images=====================//
import PasswordSvg from '../../public/icons/password.svg';
import NoteSvg from '../../public/icons/note.svg';
import SecurityCheckSvg from '../../public/icons/security-check.svg';
import GeneratePasswordSvg from '../../public/icons/generate-password.svg';
import LogoSvg from '../../public/icons/logo.svg';

//===============components========//

const MenuSidebar = () => {
    return ( 
        <div className="menu__sidebar">
    
            <a className="logo" >
                <div className="logo__imgcont">
                    <LogoSvg/>
                </div>        
            </a>

            <ul className="menu__sidebar__ul">
                <li className="menu__sidebar__li">
                    <Link href="/passwords">
                        <a className="menu__sidebar__link active" >
                        <div className="menu__sidebar__imgcont">
                            <PasswordSvg/>
                        </div>
                        <p className="menu__sidebar__linktext">Passwords</p>
                        
                    </a>
                    </Link>
                </li>
                
               
                <li className="menu__sidebar__li">
                    <Link href="/notes">
                        <a className="menu__sidebar__link" >
                        <div className="menu__sidebar__imgcont">
                            <NoteSvg/>
                        </div>
                        <p className="menu__sidebar__linktext">Notes</p>
                        
                    </a>
                    </Link>
                </li>
                <li className="menu__sidebar__li">
                    <Link href="/notes">
                        <a className="menu__sidebar__link" >
                        <div className="menu__sidebar__imgcont">
                            <SecurityCheckSvg/>
                        </div>
                        <p className="menu__sidebar__linktext">Security Dash</p>
                        
                    </a>
                    </Link>
                </li>
                <li className="menu__sidebar__li">
                    <Link href="/passwords">
                        <a className="menu__sidebar__link" >
                        <div className="menu__sidebar__imgcont">
                            <GeneratePasswordSvg/>
                        </div>
                        <p className="menu__sidebar__linktext">Generate Password</p>
                        
                    </a>
                    </Link>
                </li>
               
              
            </ul>
        </div>
     );
}
 


export default MenuSidebar;