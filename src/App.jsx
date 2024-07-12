import { useEffect, useState } from 'react'
import SvgIcon from './cmps/SvgIcon'
import UserMsg from './cmps/UserMsg'
import AppModal from './cmps/AppModal'
import { showSuccessMsg, eventBus } from './services/event-bus.service'
import RouterView from './RouterView'
import { Link } from 'react-router-dom'



function App() {
  useEffect(() => {
    showSuccessMsg('Welcome to Code_Master!')
  }, [])

  function openUserModal() {
    eventBus.emit('showModal', 'userModal')
  }

  return (
    <section className='app-container main-layout'>
      <header className='full main-layout app-header'>
        <div className="header-container grid grid-dir-col">
          <span>
            <Link to='/'>
              <SvgIcon iconName={'logo'} />
            </Link>
            {/* <SvgIcon iconName={'logo'} /> */}
          </span>
          <h1>Code_Master</h1>
          <span onClick={openUserModal}>
            <SvgIcon iconName={'menu'} />
          </span>
        </div>
      </header>
      <section className='router-view'>
        <RouterView />
      </section>
      <footer className='app-footer'>
        <UserMsg />
        <AppModal />
      </footer>
    </section>
  )
}

export default App
