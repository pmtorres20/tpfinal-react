import React, { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import './ContactDetail.css';

const ContactDetail = ({ contactId }) => {
    const { contacts, isLoadingContacts } = useContext(ContactContext);

    if (isLoadingContacts) {
        return <LoaderSpinner />;
    }

    const contact = contacts.find(c => c.id === parseInt(contactId));

    if (!contact) {
        return (
            <div className="no-contact">
                <h3>Contacto no encontrado</h3>
                <p>No se pudo encontrar la información del contacto.</p>
            </div>
        );
    }

    return (
        <div className="contact-detail">
            <div className="contact-profile">
                <img 
                    src={contact.img} 
                    alt={`${contact.name} profile`} 
                    className="contact-profile-img" 
                />
                <h2 className="contact-name">{contact.name}</h2>
            </div>
            
            <div className="contact-info">
                <div className="info-item">
                    <span className="info-label">Última conexión:</span>
                    <span className="info-value">{contact.last_time_connected}</span>
                </div>
                
                <div className="info-item">
                    <span className="info-label">Mensajes no leídos:</span>
                    <span className="info-value">{contact.unread_messages}</span>
                </div>
                
                <div className="info-item">
                    <span className="info-label">Último mensaje:</span>
                    <span className="info-value">{contact.last_message?.text || 'No hay mensajes'}</span>
                </div>
            </div>
        </div>
    );
}

export default ContactDetail;