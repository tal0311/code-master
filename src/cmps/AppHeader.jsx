import { Link } from 'react-router-dom'
import SvgIcon from './SvgIcon'
import { socketService, ON_MENTOR_LOGIN } from '../services/socket.service'
import { showSuccessMsg } from '../services/event-bus.service'
import { useEffect } from 'react'

function AppHeader({ openUserModal }) {


  return (
    <header className='full main-layout app-header'>
      <div className="header-container grid grid-dir-col">
        <span>
          <Link to='/'>
            <SvgIcon iconName={'logo'} />
          </Link>
        </span>
        <h1>Code_Master</h1>
        <span onClick={openUserModal}>
          <SvgIcon iconName={'menu'} />
        </span>
      </div>
    </header>
  )
}

export default AppHeader