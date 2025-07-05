import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './NewMessageForm.css'
import { RiMailSendLine } from "react-icons/ri";

export default function NewMessageForm() {
    /* const result = useContext(MessagesContext)
    alert(result.dato) */
    const { addNewMessage } = useContext(MessagesContext)
    const handleSubmitNewMessage = (e) => {
        //Esta funcion se encarga de manejar el envio del formulario
        e.preventDefault()
        let new_text = e.target.text.value
        addNewMessage(new_text)
        e.target.text.value = '' //Borrar el mensaje enviado del formulario
        //Otra forma de resetar el form
        //e.target.reset()
    }
    return (
        <div className='NewMessage_container'>
            <form onSubmit={handleSubmitNewMessage}
                className='NewMessage-form'>
                <input className='NewMessage_input' id='text' name='text' minLength={1} required ></input>
                <button type='submit' className='NewMessage_button-send'><RiMailSendLine /></button>
            </form>
        </div>
    )
}
