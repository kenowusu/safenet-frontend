import cookie from 'cookie';

const isLoggedIn = async(API,context)=>{


    //get cookie and parse
    const  reqCookie = (context.req.headers.cookie)?context.req.headers.cookie : "";
    const  parsedCookie = cookie.parse(reqCookie);

    
    //check if user is authenticated from server with token(cookie)
    const api = `${API}/api/users/isLoggedIn`;
    const reqOptions = {
        method:"POST",
        credentials:'include',
        headers:{
            cookie:reqCookie
        }
    }

    const req = await fetch(api,reqOptions);

    if(req.status == 200){
        const response = await req.json();
        const isAuthenticated = response.isAuthenticated;
        if(isAuthenticated){
            return true;
        }else{
            return false;
        }
    }
}

export default isLoggedIn;