/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
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

// SOLUCIÓN PERSONAL --> Confirmado el envío del repositorio a GitHub:

const user = prompt('Usuario: '); // Solicitud a usuario para que ingrese el usuario 
const password = prompt('Password: '); // Solicitud a usuario para que ingrese la contraseña 

function verification(username, password) {
    for(persona of usersDatabase) {
        if ((persona.username === username) && (persona.password === password)) {
            console.log(`Bienvenido ${persona.username}!!!`);
            console.log('Resumen de tu timeline:');
            for (timeLine of usersTimeLine) {
                console.log(`${timeLine.username}: ${timeLine.timeline}`);
            }
        } else {
            console.log('Las credenciales que proporcionaste no corresponden a lo requerido');
        }
    }
}

verification(user,password);