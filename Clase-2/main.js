let numero1 = prompt('Ingrese su numero')
if (numero1 > 1000) {
    alert('Este numero es mayor a 1000')
} else if (numero1 == 1000) {
    alert('Mismo numero ingresado')
} else if (numero1 == '') {
    alert('Error: ingrese un numero')
} else {
    alert('Este numero es menor a 1000')
}

let hola = prompt('Ingrese Hola')
if ((hola != '' && hola == 'hola') || hola == 'Hola') {
    alert('Hola ingresado correctamente')
} else {
    alert('Error: por favor ingrese Hola')
}

let numero2 = prompt('Ingrese un numero entre 10 y 50')
if (numero2 > 10 && numero2 < 50) {
    alert('El ' + numero2 + ' esta entre 10 y 50')
} else if (numero2 == '') {
    alert('Error: ingrese un numero')
} else if(numero2 < 10 || numero2 > 50) {
    alert('El ' + numero2 + ' no se encuentra entre 10 y 50')
}


