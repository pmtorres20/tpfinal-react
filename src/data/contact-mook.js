//Este archivo solo contiene la informacion de la app, en futuro lo vamos a eliminar
const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Pepe',
            last_time_connected: '14:19',
            img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
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
            img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
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
            img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
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
            name: 'jose',
            last_time_connected: '20:59',
            img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
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
        }
    ]
}

export default mook_data
