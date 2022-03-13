import Cookies from 'universal-cookie';
const cookies = new Cookies();
import { parse } from 'tldts';


//============guest User Login=========
/*


*/
const guestUserLogin = async (e)=>{
  e.preventDefault();
  
  const api = process.env.NEXT_PUBLIC_API;
  const reqUrl = `${api}/api/guests/login`;
  const reqOptions = {
      method:"POST",
      credentials:"include",
      headers:{
          "Content-Type":"application/json"
      }
  }
 
 //=============request=====================
 const request = await fetch(reqUrl,reqOptions);
 if(request.status === 200){
  const response = await request.json();
  const token = response.token;
  
  //======set cookie=====
  const {domain} = parse(api)
  const cookieDomain = `.${domain}`;
  const cookieOptions = {
      domain:cookieDomain
  }
  cookies.set('tk',token,cookieOptions);

  //===redirect====//
  window.location.href = "/vault";
 }
}


export default guestUserLogin;