import { useEffect, useState } from 'react'
import SvgIcon from './cmps/SvgIcon'
import UserMsg from './cmps/UserMsg'
import { showSuccessMsg } from './services/event-bus.service'
import RouterView from './RouterView'



function App() {
  useEffect(() => {
    showSuccessMsg('Welcome to React Vite!')
  }, [])


  return (
    <section className='app-container main-layout'>
      <header className='full main-layout app-header'>
        <div className="header-container grid grid-dir-col">
          <span>

         <SvgIcon iconName={'logo'} />
          </span>
          <h1>Code_Master</h1>
        </div>
      </header>
      <section className='router-view'>
        <RouterView />
      </section>
      <footer className='app-footer'>
        <UserMsg />
      </footer>
    </section>
  )
}

export default App
