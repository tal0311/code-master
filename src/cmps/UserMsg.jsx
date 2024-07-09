import { useEffect , useState} from "react"
import { eventBus, SHOW_MSG } from "../services/event-bus.service"

function userMsg() {
    const [msg, setMsg] = useState(null)

    let subscribe =null

    useEffect(() => {
        subscribe= eventBus.on(SHOW_MSG, setUserMsg)

        return () => {
            subscribe()
        }
    }, [])

   function setUserMsg(msg) {
       setMsg(msg)
       setTimeout(() => {
           setMsg(null)
       }, 3000)
    }

    if (msg) return <div className={'user-msg ${msg.type}'}>{msg.txt}</div> 
   
}

export default userMsg