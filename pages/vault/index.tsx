

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import isLoggedIn from '../../lib/user/isLoggedIn';

//===============components ============//

import Header from '../../components/vault/Header';
import MenuSidebar from '../../components/vault/MenuSidebar';
import Sort from '../../components/vault/Sort';
import Password from '../../components/vault/Password';
import AddPassword from '../../components/vault/AddPassword';
import PasswordContextProvider from '../../contexts/PasswordContext';







import Layout from '../components/home/layout';

export const getServerSideProps = async(context)=>{
    
    const API = process.env.API;

     const isloggedin = await isLoggedIn(API,context);

     if(!isloggedin){
      return{
          redirect:{
              destination:"/login"
          }
      }
   }
    return{
        props:{
            url:API
        }
    }


}

const PasswordPage: NextPage = () => {
  return (
 
    <div className="page_container">
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
          <title>Rottpass | Vault</title>
      </Head>
      <PasswordContextProvider>
        <Header/>
        <Sort/>
        
          <Password/>
        
      
        <AddPassword/>
        <MenuSidebar/>
      </PasswordContextProvider>
      
    </div>
  )
}

export default PasswordPage;
