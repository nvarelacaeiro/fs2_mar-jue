//eleva la declaración de algunas funciones o variables a la cima de nuestro código
saludar("Pepi") 
// despedir("García")

previa = "esto se asigna antes de la declaración de la variable"
previa2 = "tenemos un error"

function saludar(param) {
    console.log(`Hola ${param}`)
}

const despedir = (param) => {
    console.log(`Hasta luego ${param}`)
}

var previa 
let previa 