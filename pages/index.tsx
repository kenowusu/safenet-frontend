import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import Header from '../components/Header';
import MenuSidebar from '../components/MenuSidebar'

const Home: NextPage = () => {
  return (
    <div className="page_container grid" >
      <Header/>
      <MenuSidebar/>
    </div>
  )
}

export default Home
