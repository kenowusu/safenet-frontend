import {useState,useEffect} from 'react';


import Cookies from 'universal-cookie';
import Head from 'next/head';
import { parse } from 'tldts';




//===========my imports=========//
import Layout from '../components/home/layout';
import {Login} from '../components/Login'
import TogglePasswordEye from '../components/TogglePasswordEye';
import guestUserLogin from '../lib/user/guestUserLogin';
import isLoggedIn from '../lib/user/isLoggedIn';
import {userVal} from '../validations/userValidation';



export const getServerSideProps = async(context)=>{
    
    const API = process.env.API;

     const isloggedin = await isLoggedIn(API,context);

     if(isloggedin){
        return{
            redirect:{
                destination:"/vault"
            }
        }
     }

    return{
        props:{
            url:API
        }
    }


}






const LoginPage = (props)=>{


      //set states
    //   const [email,setEmail] = useState('');
    //   const [password,setPassword] = useState('');
    //   const [counter,setCounter] = useState(0);
    //   const [token,setToken] = useState('');
    //   const [valError,setValError] = useState({
    //                                           validationError:"",
    //                                           style:{display:"none"}                                           
    //                                       })
  
      
    //   const user = {email,password};

    //       //use Effects
    // useEffect(()=>{
       
    //     setValError({validationError:"",style:{display:'none'}})
    //     try{
    //         const validateUser =   userVal.validateSync(user);
    //       }catch(err){
    //         let formerr  = err.errors[0];
    //         if(counter >=1){
    //             setValError({validationError:formerr,style:{display:'inline-block'}})
    //         }
    //         setCounter(counter+1);
    //       }
    // },[email,password]);




 
      

    return(
       <>
        <Head>
            <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
            <title>Mysafenet | Welcome Back</title>
        </Head>
        <Login/>
        </>
    )
}




  
export default LoginPage;