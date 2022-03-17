// Spread operator: nos permite copiar rápidamente todo o una parte de un array
// y objeto existente dentro de otro array u objeto

const numbers = [1, 2, 3, 4, 5];
const [uno, dos, ...rest] = numbers; //spread operato ...rest "serian los tres puntos"

console.log("numbers:", numbers);
console.log("uno:", uno);
console.log("dos:", dos);
console.log("rest:", rest);

const myVehicle = {
  make: "Ford",
  model: "mustar",
  color: "red",
};

const updateMyVehicle = {
  make: "Ford",
  model: "mustar",
  color: "red",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle)

//como hacer para concatenar dos arreglos
const arrNumbs = [10, 30, 19, 90]
const arrNames = ["Nicolás", "Alberto"]
const arrCominbined = [...arrNumbs, ...arrNames] 

const saludo = "Hola Camila"
console.log([...saludo])
console.log(...saludo)
