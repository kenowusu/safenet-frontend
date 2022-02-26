import {useEffect} from 'react';


//=======================components =================//
import AddPasswordSvg from '../../public/icons/options/options-add.svg';

const AddPassword = () => {
    // useEffect(()=>{
    //  const addPasswordBtn
    // },[])
    return ( 
        <button className="addPasswordBtn flex justify-center items-center" data-toggle="modal" data-target="addPasswordModal">
            <AddPasswordSvg/>
        </button>
     );
}
 
export default AddPassword;