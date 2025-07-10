import React, { useContext } from 'react'
import { useParams, Link } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'
import ContactDetail from '../../Component/ContactDetail/ContactDetail'
import Header from '../../Component/Header/Header'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'
import './ContactDetailScreen.css'

export default function ContactDetailScreen() {
    const { contact_id } = useParams()
    const { contacts, isLoadingContacts } = useContext(ContactContext)
    
    if (isLoadingContacts) {
        return <LoaderSpinner />
    }
    
    // Buscar el contacto en la lista
    const contact = contacts.find(contact => contact.id === parseInt(contact_id))
    
    // Si no se encuentra el contacto, mostrar error
    if (!contact) {
        return (
            <div className="contact-detail-error">
                <Header title="Error" />
                <div className="error-content">
                    <h2>Contacto no encontrado</h2>
                    <p>El contacto que buscas no existe o ha sido eliminado.</p>
                    <Link to="/" className="error-button">Volver a contactos</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="contact-detail-container">
            <Header 
                title={contact.name}
                subtitle="Información del contacto"
            />
            
            <div className="contact-detail-content">
                <div className="contact-detail-navigation">
                    <Link to={`/contacts/${contact_id}/messages`} className="nav-button">
                        ← Volver al chat
                    </Link>
                    <Link to="/" className="nav-button">
                        Ver todos los contactos
                    </Link>
                </div>
                
                <ContactDetail contactId={contact_id} />
            </div>
        </div>
    )
}
