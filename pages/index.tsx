import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/icons/logo.svg';



//============= components====================//
import HomepageIndex from '../components/home/index';
import Layout from '../components/home/layout';



const HomePage = ()=>{


  return(
    <>
      <HomepageIndex/>
    </>
    
  )
}


//define index Layout 
HomePage.getLayout = function getLayout(page){
  return (
       <Layout>
         {page}
       </Layout>
  )
}




export default HomePage;
