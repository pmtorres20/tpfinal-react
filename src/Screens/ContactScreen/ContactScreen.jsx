import React, { useContext, useState } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Component/ContactList/ContactList'
import './ContactScreen.css'

export default function ContactScreen() {
    const {contacts} = useContext(ContactContext)
    const [searchTerm, setSearchTerm] = useState('')
    
    // Filtrar contactos basado en el término de búsqueda
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }
    // Si no hay contactos, mostrar un mensaje
    if (contacts.length === 0) {   
        return (
            <div className='contactScreen_empty'>
                <h2>No hay contactos disponibles</h2>
            </div>
        )
    }
    return (
        <div className='contactScreen_page'>
            <div className='contactScreen_container'>
                <div className='contactScreen_header'>
                    <h1 className='contactScreen_title'>Mis Contactos</h1>
                    <p className='contactScreen_subtitle'>
                        {filteredContacts.length} de {contacts.length} contacto{contacts.length !== 1 ? 's' : ''}
                    </p>
                </div>
                {/* Barra de búsqueda */}
                <div className='search_container'>
                    <input
                        type="text"
                        placeholder="Buscar contactos..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className='search_input'
                    />
                </div>
                
                <ContactsList contacts={filteredContacts} />
            </div>
        </div>
    )
}



