import {useState,createContext, useEffect} from 'react';
import Cookies from 'universal-cookie';
const cookie = require('cookie');
import isEmail from 'validator/lib/isEmail';

export const PasswordContext = createContext();


const PasswordContextProvider = (props)=>{
    const api = process.env.NEXT_PUBLIC_API;

    //======================setStates================//
    const [passwords,setPasswords] = useState([]);
    const [passValErr,setPassValErr] = useState('');

    //=====edit password state====//
    const [editPassId,setPassId] = useState('');
    const [isEditForm,setIsEditForm] = useState(false);
    const [editUrl,setEditUrl] = useState('');
    const [editName,setEditName] = useState('');
    const [editUsername,setEditUsername] = useState('');
    const [editPassword,setEditPassword] = useState('');
    const [editPassValErr,setEditPassValErr] = useState('');
    

    const [showAddPasswordModal,setShowAddPasswordModal] = useState(false);
    const [showDialog,setShowDialog] = useState(false);

    const [showSharePasswordModal,setShowPasswordModal] = useState('');

    const [shareErr,setShareErr] = useState('');

    const [shareEmail,setShareEmail] = useState('');

    const [passIsShared,setIsPasswordIsShared] = useState(false); 
   
    const [showImportPasswordModal,setShowImportPasswordModal] = useState(false);

    const [showImportSuccessfulDialog,setShowImportSuccessfulDialog] = useState(false);

    //==================fetch Passwords===========//
    const fetchPasswords = async(api)=>{
        
        const cookies = new Cookies();
        const token = cookies.get('tk');
        const reqCookies = cookie.parse(`tk=${token}`);
        const url =  `${api}/api/passwords`;
        const options = {
            method:"GET",
            credentials:'include',
            headers:{
                "cookie":reqCookies
            }
        }
        const passReq = await fetch(url,options);

        if(passReq.status === 200){
            const passRes = await passReq.json();
            
            setPasswords(passRes);
            
          
        } 
    }
    

    //================addPassword========================//
    const addPassword = async(newPassword,setUrl,setName,setUsername,setPassword)=>{


    
        // return
        const apiUrl = `${api}/api/passwords/create`;
        const passReqOptions = {
            method:"POST",
            body:JSON.stringify(newPassword),
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            }
        }
        const passReq = await fetch(apiUrl,passReqOptions);

     

        if(passReq.status === 200 || passReq.status == 422){

            const passRes  = await passReq.json();
            
            //=======if passowrd invalid fields
            if(passReq.status == 422){
                setPassValErr(passRes.message)
            }
            // if password saves
            else if(passReq.status == 200){
                //come back and change
                setPasswords([...passwords,passRes.password]);
                //reset password modal state
                setPassValErr('');
                setUrl('');
                setName('');
                setUsername('');
                setPassword('');
                document.getElementById("addPasswordModal").classList.toggle('modal_is_hidden');
                
        
                

            }

        }
    }


    

        //=================view Password=====================

        const viewPassword = async(e,)=>{
            let target = e.target;
             console.log("I was clicked")
            //========if not tr, go up dom until you find password tr============//
            for(let i=0;i<7;i++){
                if(target.classList.contains('password-item-tr')){
                    break;
                }
                target = target.parentNode;
            }
    
           const passwordId = target.getAttribute('passid');
    
           //===fetch password with password Id =========//
           const url = `${api}/api/passwords/password/${passwordId}`;
           const reqOptions = {
               method:"GET",
               credentials:'include'
           }
           const passReq = await fetch(url,reqOptions);
           
           if(passReq.status === 200){
               const passRes = await passReq.json();
               let password = passRes.password;
            
              
               //===========show Password Edit modal==============//
               setPassId(password.id);
               setEditUrl(password.url);
               setEditName(password.name);
               setEditPassword(password.password);
               setEditUsername(password.username)
               
               setIsEditForm(true)
             
              return;
           }
          
        }

  //=======================delete password =========================//
  const getPasswordConfirmation = (e)=>{
      setShowDialog(true);
  }

  const deletePassword = async()=>{

     const reqOptions = {
         method:"DELETE",
         credentials:'include',
         headers:{
             "Content-Type":"include"
         }
     }
     const apiUrl = `${api}/api/passwords/password/${editPassId}`;
     const passReq = await fetch(apiUrl,reqOptions);
     
     if(passReq.status === 200){
         const deletedPassState = passwords.filter(password => password.id !== editPassId);
         setPasswords(deletedPassState);
         setShowDialog(false);
         setIsEditForm(false);
     }
  }


   //=======================share password modal=====================//
        const getSharePasswordModal = (e)=>{
            setShowPasswordModal(true);
        }

        //========================share Password============//

        const sharePassword = async()=>{
            
            const apiUrl = `${api}/api/tools/share_password`;
            const data = {
                email:shareEmail,
                passwordId:editPassId
            }
            const body = JSON.stringify(data);
            const reqOptions = {
                method:"POST",
                body:body,
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                }

            }

            if(!isEmail(shareEmail)){
                console.log(shareErr)
                setShareErr('Enter valid email');
                return;
            }    
            //================send password=======//
            const passReq = await fetch(apiUrl,reqOptions);

            if(passReq.status == 200 ||  passReq.status == 500){
                const passRes = await passReq.json();
                if(passReq.status == 500){

                    return setShareErr(passRes.message);
                }else if(passReq.status == 200){
                    setShareErr('');
                    setIsPasswordIsShared(true);
                }
            }
            
        }

       //============hide Share Password Modal================
        const hideSharePasswordModal = (e)=>{
            setShareErr('');
            setShowPasswordModal(false);
          }
        

    useEffect(()=>{
        fetchPasswords(api);
    },[])

    
    return(
        <PasswordContext.Provider value={{
            passwords,
            setPasswords,
            passValErr,
            addPassword,
            viewPassword,
            setPassId,
            editPassId,
            editUrl,
            editPassword,
            editUsername,
            editName,
            isEditForm,
            setIsEditForm,
            editPassValErr,
            setEditPassValErr,
            deletePassword,
            getPasswordConfirmation,
            showDialog,
            setShowDialog,
            showSharePasswordModal,
            setShowPasswordModal,
            getSharePasswordModal,
            hideSharePasswordModal,
            sharePassword,
            shareErr,
            setShareErr,
            shareEmail,
            setShareEmail,
            passIsShared,
            showAddPasswordModal,
            setShowAddPasswordModal,
            showImportPasswordModal,
            setShowImportPasswordModal,
            showImportSuccessfulDialog,
            setShowImportSuccessfulDialog

                                        
             }}>
            {props.children}
        </PasswordContext.Provider>
    )
}

export default PasswordContextProvider;

