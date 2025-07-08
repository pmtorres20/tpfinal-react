import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import Swal from 'sweetalert2'
import { useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner';
import './HomeScreen.css'
import { getContactList } from '../../services/contactService';

export default function HomeScreen() {

    //Capturamos el valor de id de contacto de la URL usando la funcion useParams
    const { contact_id } = useParams()
    const { loadMessages, isMessagesLoading } = useContext(MessagesContext)
    //const {contact_id} = useParams()
    //La funcion console.log se ejecute cada vez que se cambie un parametro de busqueda
    //useEffect tiene la responsabilidad de manejar la carga/recarga de funcionalidad
    //El primer parametro es una callback con la accion a repetir 
    //El segundo parametro es un array de dependencias
    //Funcionalidad: Si alguna de las dependencias actualiza su valor el efecto debera actualizarse, es decir la accion se re-ejecutara
    //Queremos que busque la lista de mensajes cada vez que el contact_id cambie, por eso nos interesa usar un efecto, ya que esta operacion se ejecutara dependiendo del cambio de cierto valor
    useEffect(
        () => {
            loadMessages(contact_id)
        },
        [contact_id]
    )

    if (isMessagesLoading) {
        return <LoaderSpinner />
    }
    const handleClickAlertButton = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
    //funcion que se encarga de buscar el nombre del contacto en la lista de contactos
    const nombre_contacto = getContactList().find(contact => contact.id === parseInt(contact_id)).name
    console.log(nombre_contacto)

    return (
        <div className='chatScreen_page'>
            <div className='chatScreen_container'>
                <h3 className='chatScreen_title'>
                    {nombre_contacto}
                </h3>
                {/*<button onClick={handleClickAlertButton}>Info</button>*/}
                <Chat />
                <NewMessageForm />
            </div>
        </div>

    )
}


