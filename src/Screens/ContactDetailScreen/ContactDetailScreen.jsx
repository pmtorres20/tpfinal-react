import React from 'react'
import { useParams, Link } from 'react-router'
import { getContactList } from '../../services/contactService'
import './ContactDetailScreen.css'

export default function ContactDetailScreen() {
    const { contact_id } = useParams()
    
    // Buscar el contacto en la lista
    const contact = getContactList().find(contact => contact.id === parseInt(contact_id))
    
    // Si no se encuentra el contacto, mostrar error
    if (!contact) {
        return (
            <div className="contact-detail-error">
                <h2>Contacto no encontrado</h2>
                <Link to="/contacts">Volver a contactos</Link>
            </div>
        )
    }

    return (
        <div className="contact-detail-container">
            <div className="contact-detail-header">
                <Link to={`/contacts/${contact_id}/messages`} className="back-button">
                    ← Volver al chat
                </Link>
            </div>
            
            <div className="contact-detail-content">
                <div className="contact-profile">
                    <img 
                        src={contact.img} 
                        alt={contact.name}
                        className="contact-profile-img"
                    />
                    <h1 className="contact-name">{contact.name}</h1>
                    <p className="contact-last-connection">
                        Última conexión: {contact.last_time_connected}
                    </p>
                </div>
            </div>
        </div>
    )
}
