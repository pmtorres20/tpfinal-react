import React, { useContext, useState } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Component/ContactList/ContactList'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'
import './ContactScreen.css'
import Header from '../../Component/Header/Header'

export default function ContactScreen() {
    const { contacts, isLoadingContacts } = useContext(ContactContext)
    const [searchTerm, setSearchTerm] = useState('')
    
    // Filtrar contactos basado en el término de búsqueda
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    // Mostrar loader mientras cargan los contactos
    if (isLoadingContacts) {
        return <LoaderSpinner />
    }

    // Si no hay contactos después de cargar, mostrar un mensaje
    if (contacts.length === 0) {   
        return (
            <div className='contactScreen_empty'>
                <Header title="Mis Contactos" />
                <div className='no-contacts-message'>
                    <h2>No hay contactos disponibles</h2>
                    <p>Parece que aún no tienes contactos agregados.</p>
                </div>
            </div>
        )
    }
    return (
        <div className='contactScreen_page'>
            <div className='contactScreen_container'>
                <Header/>
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
                <p className='contactScreen_subtitle'>
                        {filteredContacts.length} de {contacts.length} contacto{contacts.length !== 1 ? 's' : ''}
                </p>
                <ContactsList contacts={filteredContacts} />
            </div>
        </div>
    )
}



