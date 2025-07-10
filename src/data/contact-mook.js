//Este archivo solo contiene la informacion de la app, en futuro lo vamos a eliminar
const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Pepe',
            last_time_connected: '14:19',
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'YO',
                    hora: '23:10',
                    id: 1,
                    texto: 'Hola que tal?',
                    status: 'visto'
                },
            ]
        },
        {
            id: 2,
            name: 'Lucia',
            last_time_connected: '15:19',
            img: "https://randomuser.me/api/portraits/women/25.jpg",
            last_message: {
                id: 1,
                text: 'Que tal, tanto tiempo!'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'USUARIO',
                    hora: '23:11',
                    id: 2,
                    texto: 'Si, hoy aprendi estados',
                    status: 'visto'
                },
            ]
        },
        {
            id: 3,
            name: 'Carlos',
            last_time_connected: '17:19',
            img: "https://randomuser.me/api/portraits/men/45.jpg",
            last_message: {
                id: 1,
                text: 'Buenas, estas aprendiendo React? verdad?'
            },
            unread_messages: 20,
            messages: [
                {
                    emisor: 'YO',
                    hora: '23:12',
                    id: 3,
                    texto: 'Eso que significa 🤓?',
                    status: 'no-visto'
                },
            ]
        },
        {
            id: 4,
            name: 'Jose',
            last_time_connected: '20:59',
            img: "https://randomuser.me/api/portraits/men/78.jpg",
            last_message: {
                id: 1,
                text: 'Hola amigo, como estas?'
            },
            unread_messages: 2,
            messages: [
                {
                    emisor: 'YO',
                    hora: '23:12',
                    id: 2,
                    texto: 'Estudiaste? 🤓?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '23:13',
                    id: 3,
                    texto: 'Si, hoy aprendi estados',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '23:23',
                    id: 4,
                    texto: 'y tu? que haces?',
                    status: 'no-visto'
                }
            ]
        },
        {
            id: 5,
            name: 'Pablo',
            last_time_connected: '13:59',
            img: "https://randomuser.me/api/portraits/men/67.jpg",
            last_message: {
                id: 1,
                text: 'Tengo una duda con react, me ayudas?'
            },
            unread_messages: 2,
            messages: [
                {
                    emisor: 'YO',
                    hora: '23:12',
                    id: 2,
                    texto: 'Tengo una duda con react, me ayudas?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '23:13',
                    id: 3,
                    texto: 'Si, dime en que puedo ayudarte',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '12:50',
                    id: 4,
                    texto: 'Quiero aprender sobre contextos y routes',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '13:00',
                    id: 4,
                    texto: 'Perfecto, te recomiendo que veas la documentacion oficial de React',
                    status: 'visto'
                }
            ]
        },
        {
            id: 6,
            name: 'María',
            last_time_connected: '09:30',
            img: "https://randomuser.me/api/portraits/women/6.jpg",
            last_message: {
                id: 1,
                text: '¿Vienes a la reunión hoy?'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'USUARIO',
                    hora: '09:25',
                    id: 1,
                    texto: 'Buenos días! ¿Cómo estás?',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '09:27',
                    id: 2,
                    texto: 'Hola María! Todo bien, gracias',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '09:30',
                    id: 3,
                    texto: '¿Vienes a la reunión hoy?',
                    status: 'no-visto'
                }
            ]
        },
        {
            id: 7,
            name: 'Andrés',
            last_time_connected: '18:45',
            img: "https://randomuser.me/api/portraits/men/22.jpg",
            last_message: {
                id: 1,
                text: 'Excelente trabajo en el proyecto 👏'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '17:30',
                    id: 1,
                    texto: 'Terminé la implementación del login',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '18:00',
                    id: 2,
                    texto: 'Genial! Lo voy a revisar ahora',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '18:45',
                    id: 3,
                    texto: 'Excelente trabajo en el proyecto 👏',
                    status: 'visto'
                }
            ]
        },
        {
            id: 8,
            name: 'Sophie',
            last_time_connected: '22:15',
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            last_message: {
                id: 1,
                text: 'Nos vemos mañana para el café ☕'
            },
            unread_messages: 3,
            messages: [
                {
                    emisor: 'USUARIO',
                    hora: '21:45',
                    id: 1,
                    texto: '¿Qué tal si tomamos un café mañana?',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '21:50',
                    id: 2,
                    texto: 'Me parece perfecto! ¿A qué hora?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '22:00',
                    id: 3,
                    texto: '¿Te parece bien a las 3 PM?',
                    status: 'no-visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '22:15',
                    id: 4,
                    texto: 'Nos vemos mañana para el café ☕',
                    status: 'no-visto'
                }
            ]
        },
        {
            id: 9,
            name: 'Diego',
            last_time_connected: '16:20',
            img: "https://randomuser.me/api/portraits/men/56.jpg",
            last_message: {
                id: 1,
                text: 'El partido fue increíble! ⚽'
            },
            unread_messages: 5,
            messages: [
                {
                    emisor: 'YO',
                    hora: '15:30',
                    id: 1,
                    texto: '¿Viste el partido de ayer?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '15:45',
                    id: 2,
                    texto: '¡Sí! Estuvo espectacular',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '16:00',
                    id: 3,
                    texto: 'Ese gol en el último minuto...',
                    status: 'no-visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '16:10',
                    id: 4,
                    texto: 'No me lo podía creer 😱',
                    status: 'no-visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '16:20',
                    id: 5,
                    texto: 'El partido fue increíble! ⚽',
                    status: 'no-visto'
                }
            ]
        },
        {
            id: 10,
            name: 'Ana',
            last_time_connected: '11:30',
            img: "https://randomuser.me/api/portraits/women/65.jpg",
            last_message: {
                id: 1,
                text: 'Gracias por la ayuda con el diseño'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'USUARIO',
                    hora: '10:15',
                    id: 1,
                    texto: '¿Puedes revisar mi diseño?',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '10:30',
                    id: 2,
                    texto: 'Claro, envíamelo por email',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '11:00',
                    id: 3,
                    texto: 'Ya lo revisé, está muy bueno!',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '11:30',
                    id: 4,
                    texto: 'Gracias por la ayuda con el diseño',
                    status: 'visto'
                }
            ]
        },
        {
            id: 11,
            name: 'Tomás',
            last_time_connected: '08:45',
            img: "https://randomuser.me/api/portraits/men/11.jpg",
            last_message: {
                id: 1,
                text: 'Buen día! Listos para la presentación?'
            },
            unread_messages: 2,
            messages: [
                {
                    emisor: 'USUARIO',
                    hora: '08:30',
                    id: 1,
                    texto: 'Buenos días equipo!',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '08:35',
                    id: 2,
                    texto: 'Hola Tomás! ¿Todo listo?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '08:45',
                    id: 3,
                    texto: 'Buen día! Listos para la presentación?',
                    status: 'no-visto'
                }
            ]
        },
        {
            id: 12,
            name: 'Victoria',
            last_time_connected: '19:55',
            img: "https://randomuser.me/api/portraits/women/72.jpg",
            last_message: {
                id: 1,
                text: 'La cena estuvo deliciosa! 🍝'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'YO',
                    hora: '19:00',
                    id: 1,
                    texto: '¿Cómo estuvo la cena?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '19:30',
                    id: 2,
                    texto: 'Increíble! El restaurante italiano',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '19:55',
                    id: 3,
                    texto: 'La cena estuvo deliciosa! 🍝',
                    status: 'no-visto'
                }
            ]
        },
        {
            id: 13,
            name: 'Martín',
            last_time_connected: '14:10',
            img: "https://randomuser.me/api/portraits/men/84.jpg",
            last_message: {
                id: 1,
                text: '¿Jugamos fútbol el sábado?'
            },
            unread_messages: 4,
            messages: [
                {
                    emisor: 'USUARIO',
                    hora: '13:30',
                    id: 1,
                    texto: 'Che, ¿cómo andas?',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '13:45',
                    id: 2,
                    texto: 'Todo bien! ¿Y vos?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '14:00',
                    id: 3,
                    texto: 'Genial! Organizando el partidito',
                    status: 'no-visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '14:10',
                    id: 4,
                    texto: '¿Jugamos fútbol el sábado?',
                    status: 'no-visto'
                }
            ]
        },
        {
            id: 14,
            name: 'Isabella',
            last_time_connected: '12:25',
            img: "https://randomuser.me/api/portraits/women/88.jpg",
            last_message: {
                id: 1,
                text: 'El libro que me recomendaste está genial 📚'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '11:30',
                    id: 1,
                    texto: '¿Cómo va la lectura?',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '12:00',
                    id: 2,
                    texto: 'Muy bien! Ya voy por la mitad',
                    status: 'visto'
                },
                {
                    emisor: 'USUARIO',
                    hora: '12:25',
                    id: 3,
                    texto: 'El libro que me recomendaste está genial 📚',
                    status: 'visto'
                }
            ]
        }
    ]
}

export default mook_data
