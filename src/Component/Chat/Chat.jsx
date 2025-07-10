import React, { useContext, useEffect, useRef } from 'react'
import Message from '../Message/Message'
import { MessagesContext } from '../../Context/MessagesContext'
import './Chat.css'

export default function Chat() {
    const {messages} = useContext(MessagesContext)
    const chatContainerRef = useRef(null)
    
    // Función para hacer scroll al final del chat
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            // Usar setTimeout para asegurar que el DOM se haya actualizado
            setTimeout(() => {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
            }, 100)
        }
    }
    
    // useEffect para hacer scroll automático cuando cambian los mensajes
    useEffect(() => {scrollToBottom()}, [messages]) // Se ejecuta cada vez que cambia el array de mensajes
    
    if(messages.length === 0){
        return (
            <div className='chat-container' ref={chatContainerRef}>
                <span className='no-message_span'>No hay mensajes!</span>
            </div>
        )
    }
    return (
        <div className='chat-container' ref={chatContainerRef}>
            {
                messages.map((message) => {
                    return (
                        <Message 
                            key={message.id} 
                            emisor={message.emisor}
                            id={message.id}
                            hora={message.hora}
                            texto={message.texto}
                            status={message.status}
                        />
                    )
                })
            }
        </div>
    )
}
