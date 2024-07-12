import { useEffect, useState } from "react"
import { eventBus, SHOW_MSG } from "../services/event-bus.service"

function userMsg() {
    const [msg, setMsg] = useState(null)

    let subscribe = null

    useEffect(() => {
        subscribe = eventBus.on(SHOW_MSG, setUserMsg)

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

    if (msg) return (
        <div className={`user-msg grid grid-dir-col ${msg.type}`}>
            <div className="indicator"></div>
            <span>{msg.txt}</span>
        </div>
    )

}

export default userMsg