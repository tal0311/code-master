import { useEffect, useState } from 'react'

import UserMsg from './cmps/UserMsg'
import AppModal from './cmps/AppModal'
import { showSuccessMsg, eventBus } from './services/event-bus.service'
import RouterView from './RouterView'
import AppHeader from './cmps/AppHeader'




function App() {
  useEffect(() => {
    showSuccessMsg('Welcome to Code_Master!')
  }, [])

  function openUserModal() {
    eventBus.emit('showModal', 'userModal')
  }

  return (
    <section className='app-container main-layout'>
     <AppHeader openUserModal={openUserModal} />
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
