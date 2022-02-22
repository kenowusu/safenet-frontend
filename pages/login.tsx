import {useState,useEffect} from 'react';
import Link from 'next/link';
import LogoImage from '../public/icons/logo.svg';
import isLoggedIn from '../lib/user/isLoggedIn';
import {userVal} from '../validations/userValidation';
import Cookies from 'universal-cookie';


//===========import components=========//
import Layout from '../components/home/layout';

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
const loginUser = async(e)=>{ 
    e.preventDefault();
   
    const isValid = await userVal.isValid(user);
    
    if(!isValid){return}
   

      const url = props.url;
      const api = `${url}/api/users/login`;
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
      }else if(reguser.status==401){
          let response = await reguser.json();
          let formerr = response.message;
          setValError({validationError:formerr,style:{display:'inline-block'}})
      }

      else if(reguser.status == 200){
          let response = await reguser.json();
          const token = response.token;
          const cookies = new Cookies();
        
          const setcookie = await cookies.set('tk',token);
          window.location.href = "/vault";
          
      }
     
  }

      

    return(
        <form className="inup" onSubmit={loginUser}>
            <Link href="/">
               <a href=""><div className="inup__logo"><LogoImage/></div></a>
            </Link>

            <div className="inup__textlink">
                <span className="inup__textlink__text">{"Don't have an account?"}</span>
                <Link href="/signup"><a className="inup__textlink__link">Sign Up</a></Link>
            </div>

            <span style={valError.style} className="inup__validationError">{valError.validationError}</span>

            <div className="inup__itemcont">
                <div className="inup__item">
                    <label className="inup__item__label" htmlFor="">Email address</label>
                    <input  type="text" className="inup__item__textbox" 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="inup__item">
                    <label  className="inup__item__label" htmlFor="">Password</label>
                    <input type="password" className="inup__item__textbox"
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className="inup__submit">
                    <input type="submit" className="inup__item__textbox inup__submit__textbox"  value="Log in"/>
                </div>
            </div>
        </form>
    )
}



//define LoginPage Layout 
LoginPage.getLayout = function getLayout(page){
    return (
         <Layout>
           {page}
         </Layout>
    )
  }
  
export default LoginPage;