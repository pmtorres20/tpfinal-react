import { createContext, useEffect, useState } from "react";
import { getMessagesByContactId } from "../services/messagesService";
import { useParams } from "react-router";



//Creamos un contexto con la funcion createContext()
export const MessagesContext = createContext(
    {
        messages: [],
        isMessagesLoading: true, 
        addNewMessage: (text) => { },
        handleEliminarMensaje: (id_mensaje) => { },
        loadMessages: (contact_id) => {}
    }
)

//children prop: es el contenido que anida mi componente MessagesContextProvider
const MessagesContextProvider = ({ children }) => {
   


    const [messages, setMessages] = useState([])
    const [isMessagesLoading, setIsMessagesLoading] = useState(true)


    const handleEliminarMensaje = (id_mensaje) => {
        // Usar filter para crear una nueva lista sin el mensaje a eliminar
        const listaMensajeActualizada = messages.filter(mensaje => mensaje.id !== id_mensaje)
        setMessages(listaMensajeActualizada)
    }
    
    const addNewMessage = (text) => {
        // Generar un ID único basado en timestamp para evitar duplicados
        const new_id = Date.now()
        const new_message = { 
            emisor: 'YO', 
            hora: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), 
            texto: text, 
            status: 'no-recibido', 
            id: new_id 
        }
        setMessages(prevMessages => [...prevMessages, new_message])
    }

    const loadMessages = (contact_id) => {
        //Antes de cargar pasamos el cargando a verdadero asi se muestra el loader
        setIsMessagesLoading(true)

        //Dentro de 2 segundos ocurrira esto
        setTimeout(
            () => {
                const messages = getMessagesByContactId(contact_id)
                setMessages(messages)
                setIsMessagesLoading(false)
            },
            2000
        )
        
    }

    return (
        <MessagesContext.Provider
            value={
                {
                    messages: messages,
                    isMessagesLoading: isMessagesLoading, 
                    addNewMessage: addNewMessage,
                    handleEliminarMensaje: handleEliminarMensaje,
                    loadMessages: loadMessages
                }
            }
        >
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider