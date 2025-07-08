import React from "react"
import { Link} from "react-router"
import './ContactItem.css'

const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/contacts/${id}/messages`} className="contact-item">
            <div className="contact-info">
                <img src={img} alt={`${name} image profile`} className="img__contact-item" />
                <h3 className="h3__contact-item">{name}</h3>
            </div>
            <div className="last-message__contact-item">
                {last_message.text}
            </div>
            <div className="contact-meta">
                <div className="last-time_contact-item">
                    {last_time_connected}
                </div>
                {unread_messages > 0 && (
                    <span className="unread-mensagge_span">{unread_messages}</span>
                )}
            </div>
        </Link>
    )
}

export default ContactItem