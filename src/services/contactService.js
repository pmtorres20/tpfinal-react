import mook_data from "../data/contact-mook"

// Esta funcion retorna un array de objetos que representan los contactos
// Cada objeto tiene las propiedades: id, name, image, lastMessage, lastMessageDate
// El array de objetos es una simulacion de datos que se podrian obtener de una API
export const getContactList = () => {
    return mook_data.contacts
}