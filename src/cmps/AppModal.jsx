import { useEffect, useRef, useState } from 'react'
import UserModal from './UserModal.jsx'
import { eventBus } from '../services/event-bus.service.js'

function AppModal() {
    const [modal, setModal] = useState(null)
    const modalRef = useRef(null)

    useEffect(() => {
        const subscribe = eventBus.on('showModal', handleModal)
        return () => {
            subscribe()
        }
    }, [])

    function closeModal() {
        setModal(null)
        modalRef.current.close()
    }

    function handleModal(modalType) {
        // console.log(modalType);
        setModal(modalType);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }

    return (
        <dialog ref={modalRef}>
            <button onClick={closeModal}>X</button>
            {modal && <DynamicCmp modalType={modal} />}
        </dialog>
    )
}

function DynamicCmp({modalType}) {
    console.log('modalType:', modalType);
    switch (modalType) {
        case 'userModal':
            return <UserModal />
    }

   
}




export default AppModal
