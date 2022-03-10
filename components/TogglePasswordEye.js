import {useState} from 'react';
//=========================import svg images==================//
import ShowPasswordSvgImage from '../public/icons/options/eye-reveal.svg';
import HidePasswordSvgImage from '../public/icons/options/eye-hide.svg';




const TogglePasswordEye = () => {
     const [isHidden,setIsHidden] = useState(true);
    
    //===================Toggle Password ===================/
    const togglePassword = (e)=>{
        const target = e.target;
        for(let i = 0;i<3;i++){
            if(target.tagName == "BUTTON"){
                break;
            }
            target = target.parentNode;
          
        }
        const targetTextBox = target.previousSibling;
        if(targetTextBox.getAttribute('type') == 'password'){
           targetTextBox.setAttribute("type","text");
           setIsHidden(false);
           return;
        }else{
           targetTextBox.setAttribute('type','password');
           setIsHidden(true);
        }
    }
    return ( 
        <button className="toggle-password-svg" onClick={togglePassword}>
          {(isHidden) ? <ShowPasswordSvgImage /> : <HidePasswordSvgImage/> }   
        </button>
     );
}
 
export default TogglePasswordEye;