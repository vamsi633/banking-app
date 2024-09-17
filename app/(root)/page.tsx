import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn={firstName:'VamsiKrishna',lastName:'Nouluri',email:'vamsikrishnanouluri@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type='greeting' title='welcome' user={loggedIn?.firstName || 'Guest'} subtext='Access and manage your account transcations efficiently'/>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}/>
        </header>
        Recent transcations
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:555.55},{currentBalance:1020.35}]}/>
    </section>
  )
}

export default Home
