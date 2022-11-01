   //register user
   const loginUser = async(e)=>{ 
    e.preventDefault();
    
    const isProductionCookie = process.env.NEXT_PUBLIC_IS_PRODUCTION_COOKIE;
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
          const apiUrl = process.env.NEXT_PUBLIC_API;
           
          //set authentication token in cookie 
          const {domain} = parse(apiUrl)
          const cookieDomain = `.${domain}`;
          const cookieOptions = {
              domain:cookieDomain
          }
          //set cookie
          const setcookie = await cookies.set('tk',token,cookieOptions);
          window.location.href = "/vault";
          
      }
     
  }
