/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario exiten en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenia y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningún timeline.
*/

const usersDatabase = [
    {
        username: 'andres',
        password: '123',
    },
    {
        username: 'caro',
        password: '456',
    },
    {
        username: 'mariana',
        password: '789',
    },
];

const usersTimeLine = [
    {
        username: 'Estefany',
        timeline: 'Me encanta JS',
    },
    {
        username: 'Oscar',
        timeline: 'Bebeloper es lo mejor!!!',
    },
    {
        username: 'Mariana',
        timeline: 'A mí me gusta más el café que el te',
    },
    {
        username: 'Andres',
        timeline: 'Hoy no se trabaja :D',
    },
];

class Usuario {
    constructor(username, password) {
        this.username = username,
        this.password = password
    }
};

users = {};

for (persona of usersDatabase) {
    users = new Usuario(persona.username, persona.password);
}

console.log(users);