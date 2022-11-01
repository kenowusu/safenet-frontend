import {useState,useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { userInfo } from 'os';
import LogoImage from '../public/icons/logo.svg';
import {userVal} from '../validations/userValidation';
import Cookies from 'universal-cookie';
import { parse } from 'tldts';
import guestUserLogin from '../lib/user/guestUserLogin';

import isLoggedIn from '../lib/user/isLoggedIn';


//===========import components=========//
import Layout from '../components/home/layout';
import TogglePasswordEye from '../components/TogglePasswordEye';




export const getServerSideProps = async(context)=>{
    
    const API = process.env.API;

     const isloggedin = await isLoggedIn(API,context);

  

    return{
        props:{
            url:API
        }
    }


}






const SignupPage = (props)=>{
    
    // //set states
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [counter,setCounter] = useState(0);
    // const [token,setToken] = useState('');
    // const [valError,setValError] = useState({
    //                                         validationError:"",
    //                                         style:{display:"none"}                                           
    //                                     })

    
    // const user = {email,password};
    
    // //use Effects
    // useEffect(()=>{
       
    //     setValError({validationError:"",style:{display:'none'}})
    //     try{
    //         const validateUser = userVal.validateSync(user);
    //       }catch(err){
    //         let formerr  = err.errors[0];
    //         if(counter >=1){
    //             setValError({validationError:formerr,style:{display:'inline-block'}})
    //         }
    //         setCounter(counter+1);
    //       }
    // },[email,password]);


           
    
    // //register user
    // const registerUser = async(e)=>{ 
    //   e.preventDefault();

    //   const isValid = await userVal.isValid(user);
      
    //   if(!isValid){return}
     
 
    //     const url = props.url;
    //     const api = `${url}/api/users/register`;
    //     const body =  JSON.stringify({email,password});
       
        
    //     let reguser =  await fetch(api,{
    //          method:"POST",
    //         credentials:'include',
    //          body:body,
    //          headers:{'Content-Type':"application/json"}
    //     })

        
    //     if(reguser.status== 400 || reguser.status == 500||  reguser.status==600){
    //         let formerr = "Server error,please try again";
    //         setValError({validationError:formerr,style:{display:'inline-block'}})
    //     }else if(reguser.status == 403){
    //         let response = await reguser.json();
    //         setValError({validationError:response.message,style:{display:'inline-block'}})

    //     }else if(reguser.status == 200){
    //         let response = await reguser.json();
    //         const token = response.token;
    //         const cookies = new Cookies();
    //         const apiUrl = process.env.NEXT_PUBLIC_API;
          
    //         //set authentication token in cookie 
    //         const {domain} = parse(apiUrl)
    //         const cookieDomain = `.${domain}`;
    //         const cookieOptions = {
    //             domain:cookieDomain
    //         }
    //         //set cookie
    //         const setcookie = await cookies.set('tk',token,cookieOptions);
    //         window.location.href = "/vault";
            
    //     }
       
    // }

    




return(
    <>
     <Head>
            <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
            <title>Rottpass | Sign Up</title>
     </Head>
    <div className='inup'>
        <div className='inup-container'>
            <form className="inup-form w-full flex flex-col  items-center" onSubmit={registerUser}>
                    <div className="inup-logo  flex justify-center items-center">
                        <Link href="/" >
                            <a href=""><LogoImage/></a>
                        </Link>
                    </div>

                    <div className="mb-5  w-full  text-sm text-left flex items-start">
                        <span className="mr-2">Already have an account?</span>
                        <Link href="/login"><a className="inup-link">Log In</a></Link>
                    </div>

                    <span style={valError.style} className="inup__validationError w-full">{valError.validationError}</span>

                    <div className="w-full">
                        <div className="inup-group mb-4">
                            <label className="inup-label" htmlFor="">Email address</label>
                            <input  type="text" className="tbox tbox__border" 
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>

                        <div className="inup-group mb-5  ">
                            <label  className="inup-label" htmlFor="">Password</label>
                            <div className='w-full relative'>
                                <input type="password" className="tbox w-full tbox__border "
                                onChange={(e)=>setPassword(e.target.value)}/>
                                {/*TogglePasswordEye Component*/}
                                <TogglePasswordEye/>
                            </div>
                        </div>

                        <div className="">
                            <input type="submit" className="btn btn__leave w-full mb-4"  value="Sign Up"/>
                            <input type="submit" className="btn btn__crail w-full"  value="Guest Log In"
                              onClick={guestUserLogin}
                            />
                        </div>
                    </div>
            
            </form>
        </div>
    </div>
    </>
)
}



//define index Layout 
SignupPage.getLayout = function getLayout(page){
    return (
         <Layout>
           {page}
         </Layout>
    )
  }
  
export default SignupPage;