console.time("timer")

let perro = {
    nombre: "cachilo",
    color: "blanco",
    hembra: true,
    edad: 5,
};
console.table(perro)

setTimeout(()=> {
    console.timeEnd("timer");

}, 3000);


for(let i = 0; i < 5; i ++) {
    console.count("Iteration #")
}

console.log("\033[031mAhora soy de color...]")
