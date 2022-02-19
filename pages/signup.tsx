import {useState,useEffect} from 'react';
import Link from 'next/link';
import { userInfo } from 'os';
import LogoImage from '../public/icons/logo.svg';
import {userVal} from '../validations/userValidation';
import Cookies from 'universal-cookie';


import isLoggedIn from '../lib/user/isLoggedIn';


//===========import components=========//
import Layout from '../components/home/layout';




export const getServerSideProps = async(context)=>{
    
    const API = process.env.API;

     const isloggedin = await isLoggedIn(API,context);

     if(isloggedin){
        return{
            redirect:{
                destination:"/dashboard"
            }
        }
     }

    return{
        props:{
            url:API
        }
    }


}






const SignupPage = (props)=>{
    
    //set states
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [counter,setCounter] = useState(0);
    const [token,setToken] = useState('');
    const [valError,setValError] = useState({
                                            validationError:"",
                                            style:{display:"none"}                                           
                                        })

    
    const user = {email,password};
    
    //use Effects
    useEffect(async()=>{
       
        setValError({validationError:"",style:{display:'none'}})
        try{
            const validateUser =  await userVal.validateSync(user);
          }catch(err){
            let formerr  = err.errors[0];
            if(counter >=1){
                setValError({validationError:formerr,style:{display:'inline-block'}})
            }
            setCounter(counter+1);
          }
    },[email,password]);


           
    
    //register user
    const registerUser = async(e)=>{ 
      e.preventDefault();

      const isValid = await userVal.isValid(user);
      
      if(!isValid){return}
     
 
        const url = props.url;
        const api = `${url}/api/users/register`;
        const body =  JSON.stringify({email,password});
       
        
        let reguser =  await fetch(api,{
             method:"POST",
            credentials:'include',
             body:body,
             headers:{'Content-Type':"application/json"}
        })

        
        if(reguser.status== 400 || reguser.status == 500||  reguser.status==600){
            let formerr = "Server error,please try again";
            setValError({validationError:formerr,style:{display:'inline-block'}})
        }else if(reguser.status == 403){
            let response = await reguser.json();
            setValError({validationError:response.message,style:{display:'inline-block'}})

        }else if(reguser.status == 200){
            let response = await reguser.json();
            const token = response.token;
            const cookies = new Cookies();
          
            const setcookie = await cookies.set('tk',token);
            window.location.href = "/dashboard";
            
        }
       
    }

    return(
        <form className="inup" onSubmit={registerUser}>
           <Link href="/">
               <a href="">
                    <div className="inup__logo"><LogoImage/></div>
               </a>
            
           </Link>

            <div className="inup__textlink">
                <span className="inup__textlink__text">Already have an account?</span>
                <Link href="/login"><a className="inup__textlink__link">Log in</a></Link>
            </div>
            
            {/* validationError */}
            <span style={valError.style} className="inup__validationError">{valError.validationError}</span>  

            <div className="inup__itemcont">
                <div className="inup__item">
                    <label className="inup__item__label" htmlFor="">Email address</label>
                    <input  type="text" className="inup__item__textbox" 
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="inup__item">
                    <label  className="inup__item__label" htmlFor="">Password</label>
                    <input type="password" className="inup__item__textbox" 
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="inup__submit">
                    <input type="submit" className="inup__item__textbox inup__submit__textbox"  value="Sign up"/>
                </div>
            </div>
        </form>
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