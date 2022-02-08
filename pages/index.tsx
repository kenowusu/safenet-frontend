import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/icons/logo.svg';


//import reason svgs 
import SecurityImage from '../public/icons/why/its-secure.svg';
import ImportPasswordImage from '../public/icons/why/import.svg';
import ExtensionImage from '../public/icons/why/extension-accessible.svg';
import ShareImage from '../public/icons/why/share.svg';
import FolderImage from '../public/icons/why/folder-category.svg';
import NoteImage from '../public/icons/why/dark-web-monitoring-report.svg';




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


      {/* why rottpass begins */}

      <div className="why">
        <h2 className="why__head">WHY ROTTPASS</h2>

        <div className="why__reasoncont">


          <div className="why__reason">
            <div className="why__reason__icon"><SecurityImage/></div>
            <h2 className="why__reason__head">SECURITY</h2>
            <p className="why__reason__desc">
            Passwords are hashed and stored with a complex AES algorithm 
            that guarantees security. Generate strong passwords.
            </p>
          </div>

          
          <div className="why__reason">
            <div className="why__reason__icon"><ImportPasswordImage/></div>
            <h2 className="why__reason__head">IMPORT PASSWORD</h2>
            <p className="why__reason__desc">
            Passwords are hashed and stored with a complex AES algorithm
             that guarantees security. Generate strong passwords.
            </p>
          </div>

          
          <div className="why__reason">
            <div className="why__reason__icon"><ExtensionImage/></div>
            <h2 className="why__reason__head">EXTENSION</h2>
            <p className="why__reason__desc">
            Passwords are hashed and stored with a complex AES algorithm that guarantees security.
             Generate strong passwords.
            </p>
          </div>

          
          <div className="why__reason">
            <div className="why__reason__icon"><ShareImage/></div>
            <h2 className="why__reason__head">SHARE</h2>
            <p className="why__reason__desc">
            Passwords are hashed and stored with a complex AES algorithm that guarantees security. Generate strong passwords.
            </p>
          </div>

          
          <div className="why__reason">
            <div className="why__reason__icon"><FolderImage/></div>
            <h2 className="why__reason__head">EASY MANAGE</h2>
            <p className="why__reason__desc">
            Passwords are hashed and stored with a complex AES algorithm 
            that guarantees security. Generate strong passwords.
            </p>
          </div>


          
          <div className="why__reason">
            <div className="why__reason__icon"><NoteImage/></div>
            <h2 className="why__reason__head">DARK WEB MONITORING</h2>
            <p className="why__reason__desc">
            Passwords are hashed and stored with a complex AES algorithm 
            that guarantees security. Generate strong passwords.
            </p>
          </div>



        </div>
      </div>



    </div>
    
  )
}




export default HomePage;
