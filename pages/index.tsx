import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/icons/logo.svg';


const HomePage = ()=>{


  return(
    <div>

      {/* head */}

      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <title>Rottpass | Password Manager & Vault App</title>
      </Head>

      {/* navigation bar */}
        <div className="navigationbar">
          <div className="navigationbar__logo">
            <Logo/>
          </div>

          <div className="navigationbar__linkcont">
            <Link href="/login"><a className="navigationbar__link navigationbar__login">Login</a></Link>
            <Link href="/login"><a className="navigationbar__link navigationbar__signup">sign up</a></Link>
          </div>
          
        </div>
      {/* navigation bar ends */}



      {/*  homepage intro starts */}
      <div className="intro">
        <div className="intro__cont">
          <h1 className="intro__head">
            PASSWORD MANAGEMENT FROM ANYWHERE.

          </h1>

          <div className="intro__desc">
            TAKE YOUR PASSWORDS WITH YOU WHERE EVER YOU GO, ROTTPASS ALLOWS YOU ACESS YOUR PASSWORD IN 
            COSOLE AND HAS A CHROME EXTENSION
          </div>
        </div>

      </div>
      {/* homepage intro ends */}



    </div>
    
  )
}




export default HomePage;
