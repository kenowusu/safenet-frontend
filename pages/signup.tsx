import Link from 'next/link';
import LogoImage from '../public/icons/logo.svg';

const SignupPage = ()=>{

    return(
        <form className="inup">
           <Link href="/">
               <a href="">
                    <div className="inup__logo"><LogoImage/></div>
               </a>
            
           </Link>

            <div className="inup__textlink">
                <span className="inup__textlink__text">Already have an account?</span>
                <Link href="/login"><a className="inup__textlink__link">Log in</a></Link>
            </div>

            <div className="inup__itemcont">
                <div className="inup__item">
                    <label className="inup__item__label" htmlFor="">Email address</label>
                    <input  type="text" className="inup__item__textbox" />
                </div>

                <div className="inup__item">
                    <label  className="inup__item__label" htmlFor="">Password</label>
                    <input type="password" className="inup__item__textbox" />
                </div>

                <div className="inup__submit">
                    <input type="submit" className="inup__item__textbox inup__submit__textbox"  value="Sign up"/>
                </div>
            </div>
        </form>
    )
}

export default SignupPage;