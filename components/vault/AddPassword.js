import {useEffect,useContext} from 'react';

import { PasswordContext } from '../../contexts/PasswordContext';

//=======================components =================//
import AddPasswordSvg from '../../public/icons/options/options-add.svg';

const AddPassword = () => {
    const {showAddPasswordModal,setShowAddPasswordModal}  = useContext(PasswordContext);
    
    const addPasswordModal = ()=>{
        setShowAddPasswordModal(!showAddPasswordModal);
    }
    return ( 
        <button onClick={addPasswordModal} className="addPasswordBtn flex justify-center items-center" data-toggle="modal" data-target="addPasswordModal">
            <AddPasswordSvg/>
        </button>
     );
}
 
export default AddPassword;