

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'



//===============components ============//

import Header from '../../components/vault/Header';
import MenuSidebar from '../../components/vault/MenuSidebar';
import Sort from '../../components/vault/Sort';
import Password from '../../components/vault/Password';

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
