let number1 = parseInt(prompt('CALCULADORA \nIngrese el primer numero para sumar \nSolo se podra hacer una operacion'))
for (let i = 0; i <= 0; i++) {
    let number2 = parseInt(prompt('CALCULADORA \nIngrese el segundo numero para sumar \nSolo se podra hacer una operacion'))
    let suma = number1 + number2;
    alert('Su resultado es: ' + suma);
}




let user = prompt('Ingrese se nombre de usuario \nEscribirlo en MAYUS \nEjemplo: JOSESITO \nEXIT para salir')

while (user.toLowerCase() != 'exit') {
    if (user.toLowerCase() == 'alan') {
        let password = prompt('Ingrese su password \nEscribirlo en MAYUS (No distingue minuscula y mayuscula) \nEjemplo: CONTRASEÑA1234')
        switch (password.toLowerCase()) {
            case 'riverelmasgrande':
                alert('Bienvenido Alan')
                break;
            default:
                alert('No eres Alan')
                break;
        }
    } else if (user.toLowerCase() == 'emiliano') {
        let password = prompt('Ingrese su password \nEscribirlo en MAYUS (No distingue minuscula y mayuscula) \nEjemplo: CONTRASEÑA1234')
        switch(password.toLowerCase()) {
            case 'bocayoteamo':
                alert('Bienvenido Emiliano')
                break;
            default:
                alert('Sos un govir')
                break;
        }
    } 
    else {
        alert('Usuario Desconocido')
        break;
    }
}