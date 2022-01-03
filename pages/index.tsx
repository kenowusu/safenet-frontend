import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'




import Header from '../components/Header';
import MenuSidebar from '../components/MenuSidebar';
import Sort from '../components/Sort';

const Home: NextPage = () => {
  return (
    <div className="page_container grid" >
      <Header/>
      <Sort/>
      <MenuSidebar/>
    </div>
  )
}

export default Home
