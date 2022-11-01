import Link from 'next/link';
import LogoImage from '../public/icons/logo.svg';





export const Login = ()=>{
    return(
    
       <div>

        <div className="auth-container">




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
                            <input 
                            className='form-field w-full'
                            type="password" placeholder='Password' />

                        </div>

                        <div className='form-group'>
                            <button 
                            className='form-field form-field__accent w-full'
                            >Login</button>
                        </div>

                        <div class="flex items-center form-group">
                            <div class="flex-grow  h-0.5" style={{backgroundColor:"#eee"}}></div>
                            <div class="flex-grow-0 mx-5 text dark:text-white">or</div>
                            <div class="flex-grow  h-0.5" style={{backgroundColor:"#eee"}}></div>
                       </div>

                       <div className='form-group'>
                            <button 
                            className='form-field  w-full'
                            >Guest Login</button>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <a  className="auth-link-txt text-sm inline-block mb-3" href="">
                            Forgot my password</a>
                        <hr />
                       <div className=" flex items-center mt-3 ">
                        <span className='inline-block text-sm mr-auto'>If You Don't Have An Account, Create</span>
                        <a href="" className='auth-link-btn text-xs inline-block' >Register</a>
                       </div>
                    </div>
                </div>

               </div>

            </div>
             {/* auth left  ends */}
            




             {/* auth right starts */}
            <div className="auth-right">
                <div className="auth-right-container">

                </div>

            </div>
             {/* auth left starts */}




        </div>

       </div>
    )
}
