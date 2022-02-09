

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


// export const getServerSideProps = async(context)=>{
//   const API = process.env.API;
//   const  authenticated = await fetch(`${API}/api/passwords/create`,{
//     method:'POST',
//     credentials:'include',
//     headers:{'Content-Type':'application/json'}
//   });
//   const  isAuthenticated = await authenticated.json().isAuthenticated;
  

  
 


//   if(isAuthenticated){
//     return{
//       redirect:{
//         destination:'/login',
//         permanent:false
//       }
//     }
//   }

  



//   return{
//     props:{}
//   }
// }


import Header from '../../components/Header';
import MenuSidebar from '../../components/MenuSidebar';
import Sort from '../../components/Sort';
import Password from '../../components/Passoword';

const PasswordPage: NextPage = () => {
  return (
    <div className="page_container " >
      <Header/>
      <Sort/>
      <Password/>
      <MenuSidebar/>
    </div>
  )
}

export default PasswordPage;
