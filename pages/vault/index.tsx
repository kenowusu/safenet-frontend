

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import isLoggedIn from '../../lib/user/isLoggedIn';

//===============components ============//

import Header from '../../components/vault/Header';
import MenuSidebar from '../../components/vault/MenuSidebar';
import Sort from '../../components/vault/Sort';
import Password from '../../components/vault/Password';
import AddPassword from '../../components/vault/addPassword';








import Layout from '../components/home/layout';

export const getServerSideProps = async(context)=>{
    
    const API = process.env.API;

     const isloggedin = await isLoggedIn(API,context);

     if(isloggedin){
        return {props:{}}
     }else{
      return{
        redirect:{destination:"/login"}
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
    <div className="page_container " >
      <Header/>
      <Sort/>
      <Password/>
      <AddPassword/>
      <MenuSidebar/>
      
    </div>
  )
}

export default PasswordPage;
