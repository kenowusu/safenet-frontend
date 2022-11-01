import Link from 'next/link';
import LogoImage from '../public/icons/logo.svg';
import ServerImg from '../public/icons/server_maintenance.svg';
import EyeRevealImage from '../public/icons/eye-reveal.svg';



export const Login = ()=>{
    return(
    
       <div className='w-full h-full'>

        <div className="auth-container h-full">




            {/* auth left  starts */}
            <div className="auth-left">

               <div className="auth-left-container">

                <div className="auth-left-container-inner">


                    <div className='auth-title'>
                        <span className='page-title'>Login</span>
                        <span className='info'>If You Are Already A Member, Easily Login In</span>
                    </div>

                    <div>
                        <div className='form-group'>
                            <input 
                             className='form-field w-full'
                             type="text" placeholder='Email'
                            
                            />
                        </div>
                        <div className='form-group'>
                        <div className="input-group">
                            <div className="input-group-append">
                                <span className="input-group-icon">
                                    <EyeRevealImage/>
                                </span>
                            </div>
                            <input 
                                className='form-field w-full'
                                type="password" placeholder='Password'
                                />
                        </div>

                        </div>

                        <div className='form-group'>
                            <button 
                            className='form-field form-field__accent w-full'
                            >Login</button>
                        </div>

                        <div className="flex items-center form-group">
                            <div className="flex-grow  h-0.5" style={{backgroundColor:"#eee"}}></div>
                            <div className="flex-grow-0 mx-5 text dark:text-white">or</div>
                            <div className="flex-grow  h-0.5" style={{backgroundColor:"#eee"}}></div>
                       </div>

                       <div className='form-group'>
                            <button 
                            className='form-field  w-full bg-white'
                            >Guest Login</button>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <a  className="auth-link-txt text-sm inline-block mb-3" href="">
                            Forgot my password</a>
                        <hr />
                       <div className=" flex items-center mt-3 ">
                        <span className='inline-block text-xs mr-auto '>If You Don't Have An Account, Create</span>
                        <a href="" className='auth-link-btn text-xs inline-block' >Register</a>
                       </div>
                    </div>
                </div>

               </div>

            </div>
             {/* auth left  ends */}
            




             {/* auth right starts */}
            <div className="auth-right w-full h-full">
                <div className="auth-right-container w-full h-full">
                    <div className="auth-right-img">
                       
                    </div>

                </div>

            </div>
             {/* auth left starts */}




        </div>

       </div>
    )
}
