import { useEffect,useContext } from "react";
import {PasswordContext} from '../../contexts/PasswordContext';
import isUrl from 'validator/lib/isUrl';
const PasswordOptDropdown = (props) => {
   const {viewPassword,setShowPasswordModal,editPassId,setPassId} = useContext(PasswordContext);
    
    
    const sharePassword = (e)=>{
       let target = e.target;
       if(!target.classList.contains('dropdown-option-item')){
           target = target.parentNode;
       }
       const passId = target.getAttribute('passid');
       setPassId(passId);
       console.log(editPassId)
       setShowPasswordModal(true); 
    }

    const gotToWebsite = (e)=>{
        let target = e.target;
       if(!target.classList.contains('dropdown-option-item')){
           target = target.parentNode;
       }
       let visitUrl = target.getAttribute('url');
       if(!isUrl(visitUrl,{require_protocol:true})){
           window.open(`https://${visitUrl}`,'_blank');
           return;
       }else{
        window.open(visitUrl,'_black');
       }
        
    }
    return ( 
        <div className="dropdown dropdown__password absolute" id={props.passwordId} onClick={(e)=> e.stopPropagation()}>
            <div className="dropdown-container">
                
                <div className="dropdown-title"><span>Password Options</span></div>

                <div className="dropdown-option">
                    <div onClick={viewPassword}  className="dropdown-option-item"><span  className="dropdown-option-item-text">View Password</span></div>
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text">Copy Username</span></div>
                    <div className="dropdown-option-item dropdown-option-item__hide"><span className="dropdown-option-item-text">Copy Password</span></div>
                    <div onClick={gotToWebsite} url={props.url} className="dropdown-option-item dropdown-option-item__show"><span className="dropdown-option-item-text">Go To Website</span></div>
                    <div className="dropdown-option-item" onClick={sharePassword} passid={props.passid}><span  className="dropdown-option-item-text  ">Share Password</span></div>

                </div>{/*dropdown-option */}
            
            </div>
            
        </div>
     );
}

export default PasswordOptDropdown;