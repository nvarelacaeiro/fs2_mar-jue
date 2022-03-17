// Con el modo estricto no se puede usar var no declaradas
// Fuera de una función tiene ámbito global
// Dentro de una función tiene ambito local, es decir puede usarse modo estricto solo dentro de una función y tendrá efecto allí unicamente 

// si comentamos las líneas 7 y 8 la ejecución se detiene. pero si dps comentamos el modo stricto vuelve a correr
"use strict"
let persona 
let nacimiento
info()

function info() {
    persona = "Federico"
    nacimiento = 1995
    console.log(persona, "nació en", nacimiento)
}
