import {useState,createContext, useEffect} from 'react';
import Cookies from 'universal-cookie';
const cookie = require('cookie');


export const PasswordContext = createContext();


const PasswordContextProvider = (props)=>{
    const api = process.env.NEXT_PUBLIC_API;
    const [passwords,setPasswords] = useState([]);
    

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


    
   

    useEffect(()=>{
        fetchPasswords(api);
    },[])

    
    return(
        <PasswordContext.Provider value={{passwords}}>
            {props.children}
        </PasswordContext.Provider>
    )
}

export default PasswordContextProvider;

