import { useEffect } from "react";

const PasswordOptDropdown = () => {

    useEffect(()=>{
        const sortOptionBtn = document.querySelector('.password-item-td-options-ellipse');
        sortOptionBtn.addEventListener('click',e=>{
            sortOptionBtn.classList.toggle('dropdown__show')
        });
    },[]);    
    return ( 
        <div className="dropdown dropdown-password absolute ">
            <div className="dropdown-container">
                
                <div className="dropdown-title"><span>Password Options</span></div>

                <div className="dropdown-option">
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text">View Password</span></div>
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text">Copy Username</span></div>
                    <div className="dropdown-option-item dropdown-option-item__hide"><span className="dropdown-option-item-text">Copy Password</span></div>
                    <div className="dropdown-option-item dropdown-option-item__show"><span className="dropdown-option-item-text">Go To Website</span></div>
                    <div className="dropdown-option-item"><span className="dropdown-option-item-text  ">Share Password</span></div>

                </div>{/*dropdown-option */}
            
            </div>
            
        </div>
     );
}

export default PasswordOptDropdown;