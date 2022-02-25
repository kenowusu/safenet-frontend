import {useState,useEffect} from 'react';
import {v4 as uuid} from 'uuid';

//=======================svg images =========//
import EllipseSvg from '../../public/icons/options-vertical.svg';
import PasswordShowSvg from '../../public/icons/eye-reveal.svg';

//=========import components ====================//
import PasswordOptDropdown from '../dropdown/passwordOptDropdown';
import AddPasswordModal from '../modal/addPasswordModal';


const Password = () => {


    useEffect(()=>{
        const sortOptionBtns = document.querySelectorAll('.password-item-td-options-ellipse');
    
        sortOptionBtns.forEach((sortOptionBtn)=>{
            sortOptionBtn.addEventListener('click',e=>{
              //prevent all other event bubbling
              e.stopPropagation();

             //hide all sortOptionBtn showing dropdown
             //open current sortOption dropdown

           
             const openedDropdowns = document.querySelectorAll('.dropdown__show');
             /*
              Hide all opened dropdown and open/show current clicked dropdown
              Visit this again
             */
             openedDropdowns.forEach(openedDropdown=>{
                 if(openedDropdown !== e.target){
                    openedDropdown.classList.remove('dropdown__show')
                 }
                 
             })
    
            e.target.classList.toggle('dropdown__show')
             
                

            });
        })

        window.addEventListener('click',(e)=>{
            let openedDropdowns =  document.querySelectorAll('.password-item-td-options-ellipse');

            openedDropdowns.forEach((openedDropdown)=>{
                if(openedDropdown.classList.contains('dropdown__show')){
                    openedDropdown.classList.remove('dropdown__show')
                    console.log('yeah')
                }
            })
        })
    },[]);
    

    const [passwords,setPasswords] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);

    return ( 
      <>     

              {/*add password component*/}
              <AddPasswordModal/>

              
              <div className="password">

               

                <div className="password-container">


                    <table className="password-table">

                        <thead  className="password-table-tbh">
                            <tr className="password-table-tbh-tr">
                                <td className='password-table-tbh-tr-td name'>Name</td>
                                <td className='password-table-tbh-tr-td folder'>Folder</td>
                                <td className='password-table-tbh-tr-td options'></td>
                            </tr>
                        </thead>

                        
                        {/* list passwords */}
                        {passwords.map(password=>{

                            return(

                                <tr className="password-item-tr" key={uuid()}>
                                    <td className="password-item-td-name">
                                        <span className="password-item-td-name-name">AWS AMAZON</span>
                                        <span className='password-item-td-username'>kennethowusu@gmail.com</span>
                                    </td>
                                    <td className="password-item-td-folder">email</td>
                                    <td className="password-item-td-options">
                                    <button className='password-item-td-options-ellipse  password-item-td-options-ellipse-btn '>
                                        ...

                                        {/* password options component */}
                                        <PasswordOptDropdown/>
                                    </button>
                                    
                                
                                    </td>
                                </tr>


                            );

                        })}

                        
                        



                    </table>
                
                </div>{/*password-container*/}


                </div>
      </>

     );
}
 
export default Password;