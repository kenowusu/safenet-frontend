import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'




import Header from '../components/Header';
import MenuSidebar from '../components/MenuSidebar';
import Sort from '../components/Sort';
import Password from '../components/Passoword';

const Home: NextPage = () => {
  return (
    <div className="page_container grid" >
      <Header/>
      <Sort/>
      <Password/>
      <MenuSidebar/>
    </div>
  )
}

export default Home
