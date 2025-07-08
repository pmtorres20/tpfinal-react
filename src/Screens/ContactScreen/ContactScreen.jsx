import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Component/ContactList/ContactList'
import './ContactScreen.css'

export default function ContactScreen() {
    const {contacts} = useContext(ContactContext)
    
    return (
        <div className='contactScreen_page'>
            <ContactsList/>
        </div>
    )
}



