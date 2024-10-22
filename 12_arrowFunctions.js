const greeting = function (name) {
    return `Hi ${name}`;
}

// Arrow function, explicit return

const newGreeting = (name) => {
    return `Hi ${name}`;
}

// Arrow function, implicit return

const newGreetingImplicit = name => `Hi ${name}`;
const implicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`;

// Lexical Binding (enlace léxico)

const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function(message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: message => {
        console.log(`${this.name} says: ${message}`); //En este caso no invoca el this de nombre y lo imprime como undefined
    }
}

fictionalCharacter.messageWithTraditionalFunction('Un gran poder conlleva una gran responsabilidad');
fictionalCharacter.messageWithArrowFunction('with great power comes great responsability.')