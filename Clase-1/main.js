let nombre = prompt('Ingrese su nombre')
alert("Hola " + nombre + " ¿Como estas?")

let edad = prompt('Ingrese su edad *solo se permite numeros')
alert(nombre + " tiene " + edad + " años")

let numero = 10


console.log(parseInt(edad) + numero) // el string lo saca del prompt edad y lo parsea con la variable numero, si en el prompt se pone cualquier caracter que no sea un numero se va a devolver NaN


console.log('Gracias por la devolucion')