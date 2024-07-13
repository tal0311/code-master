import io from 'socket.io-client'
import { userService } from './user.service'

export const ON_UPDATE_CODE = 'update-code'
export const SOCKET_EMIT_SET_TOPIC = 'chat-set-topic'
export const EMIT_USER_WATCH = 'user-watch'
export const ON_REVIEW_ABOUT_YOU = 'code-review'
export const EMIT_JOIN_ROOM = 'join-room'
export const EMIT_LEAVE_ROOM = 'leave-room'
export const ON_USERS_COUNT = 'users-count'
export const ON_MENTOR_LOGIN = 'mentor-socket'

const SOCKET_EMIT_LOGIN = 'set-user-socket'
const SOCKET_EMIT_LOGOUT = 'unset-user-socket'

const baseUrl = process.env.NODE_ENV === 'production' ? '' : '//localhost:3030'
export const socketService = createSocketService()
// export const socketService = createDummySocketService()

// for debugging from console
window.socketService = socketService



function createSocketService() {
  var socket = null
  const socketService = {
    setup() {
      socket = io(baseUrl)
      setTimeout(() => {
        const user = userService.getLoggedInUser()
        if (user) this.login(user)
      }, 500)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      data = JSON.parse(JSON.stringify(data))
      socket.emit(eventName, data)
    },
    login(user) {
      socket.emit(SOCKET_EMIT_LOGIN, JSON.stringify(user))
    },
    logout() {
      socket.emit(SOCKET_EMIT_LOGOUT)
    },
    terminate() {
      socket = null
    }
  }
  return socketService
}



