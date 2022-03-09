import {useEffect,useState,useContext} from 'react';
import {PasswordContext} from '../../contexts/PasswordContext';
import Image from 'next/image';


//==============import svg images ==============================//
import SearchSvg from '/public/icons/options/options-search.svg';
import ImportSvg from '/public/icons/options/options-import.svg';
import UserSvg from '/public/icons/options/options-user.svg';

//=============import components ==========================//
import AccountDropDown from '../dropdown/accountDropDown';

const Header = () => {
    const {setPasswords,setShowImportPasswordModal} = useContext(PasswordContext);
    const [showHeaderDropdown,setShowHeaderDropdown] = useState(false);
    const [searchValue,setSearchValue] = useState('');

    

    const toggleHeader = (e)=>{
        setShowHeaderDropdown(!showHeaderDropdown);
    }

  

    //===========search passwords ============
    const searchPasswords = async()=>{
       
        
        const api = process.env.NEXT_PUBLIC_API;
        let data;
        //=====if search input has values==============//
        if(searchValue.length > 0 ){
            data = new URLSearchParams({
                search:true,
                searchValue
            })
        }else{
            data = new URLSearchParams({
                searchValue
            }) 
        }
        const reqUrl = `${api}/api/passwords?${data}`;
        const reqOptions = {
            method:"GET",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            }
        }
        const passReq = await fetch(reqUrl,reqOptions);

        if(passReq.status === 200){
           const passRes = await passReq.json();
           //==========set passwords with search results========
           setPasswords(passRes);
        }
    }

    useEffect(()=>{
        searchPasswords();
    },[searchValue]);
    
    return ( 
        <div className="header">

             <div className="header-container">
              
                 <div className="header-searchbox">
                     <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type="text" className="header-searchbox-textbox" name="search" />
                     <label className="header-searchbox-imgc flex justify-center items-center" htmlFor="search" ><SearchSvg/></label>
                 </div>{/* searchbox container*/}

                 <div className="header-options">
                     <div className="header-options-container">
                         <button className="header-options-importc flex justify-center items-center"
                         onClick={()=>setShowImportPasswordModal(true)}><ImportSvg/></button>
                         <button  onClick={toggleHeader} className="header-options-userc header-options-userc-btn  flex justify-center items-center relative"
                            data-toggle="dropdown" data-target="user-options-dropdown" >
                            <UserSvg />
                            {/* account dropdown component */}
                            {(showHeaderDropdown)? <AccountDropDown/>:null}
                         </button>
                     </div>
                 </div>          
                 
            </div> {/* .header  container*/}
           
        </div>
     );
}
 
export default Header;