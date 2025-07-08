import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Component/ContactList/ContactList'
import './ContactScreen.css'

export default function ContactScreen() {
    const {contacts} = useContext(ContactContext)
    
    return (
        <div className='contactScreen_page'>
            <div className='contactScreen_container'>
                <div className='contactScreen_header'>
                    <h1 className='contactScreen_title'>Mis Contactos</h1>
                    <p className='contactScreen_subtitle'>
                        {contacts.length} contacto{contacts.length !== 1 ? 's' : ''} disponible{contacts.length !== 1 ? 's' : ''}
                    </p>
                </div>
                <ContactsList/>
            </div>
        </div>
    )
}



