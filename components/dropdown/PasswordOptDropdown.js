import { useEffect } from "react";


const PasswordOptDropdown = (props) => {
    useEffect(()=>{
   
           
  
    },[])
    
    return ( 
        <div className="dropdown dropdown__password absolute" id={props.passwordId} onClick={(e)=> e.stopPropagation()}>
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