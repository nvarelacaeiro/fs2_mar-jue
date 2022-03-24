//Clases: son plantillas (templates) para la creación de objetos. Una clase
// es un tipo de función. Siempre agregamos //un método llamado constructor().
/*
THIS: 
1- "definición": se refiere a un objeto (q no siempre se refiere al mismo objeto)
2- si estamos en algun método de algun objeto, this se refiere al objeto
3- cuando "this" esta solo se refiere al objeto global 
4- si estamos dentro de una funcion "this" tmb es un obj global
5- si estamos en una función pero tenemos habilitado el strict mode es undefined 
6- en un evento "this" refiere al elemento que recibe en el evento
7- ! SIEMPRE escribimos el nombre de la clase con mayúscula, ej: Dog

*/

// const { get } = require("express/lib/response");

// class Dog {
//   constructor(name, breed, age, bark) {
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.bark = bark;
//   }
//   speak() {
//       return `${this.name} says ${this.bark}`;
//   }     
// }

// const DogA = new Dog("Simona Flores", "Caniche", 14, "gruñido");
// const DogB = new Dog("Tota Flores", "Delba", 3, "guau");

/*
El método constructor es especial xq: 
se ejecuta automá" cuando se crea un nuevo objeto y se usa para iniciliazar las propiedades
del objeto que creamos con el molde o sea la clase
*/

/*
Herencia: 
La palabra clave extends se usa para crear una clase hija de otra (padre) 
La clase hija hereda todos los métodos de la clase padre
la herencia se usa para reutilizar código
*/

// console.log(Date())// no quiero formato completo entonces 👇
// //hacemos una clase para formatear la fecha
// class DateFormatter extends Date {
//   getFormattedDate() {
//      const meses = [
//        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
//      ];
//      return `${this.getDate()}-${meses[this.getMonth()]}-${this.getFullYear()}`
//   };
// }

// const ahora = new DateFormatter(Date()).getFormattedDate();
// console.log(ahora);

//------------------------------------------

//Otro ejemplo con herencia
// class Zapatilla {
//   constructor(marca) {
//     this.marca = marca;
//   }
//   eslogan() //esto es un método 
//   {
//     return "Para correr como el viento, comprate estas zapas " + this.marca
//   }
// }

// class Modelo extends Zapatilla { 
//   constructor(marca, modelo, talle, color) {
//      super(marca); //esto es herencia pura
//      this.modelo = modelo //esto es un argumento
//      this.talle = talle
//      this.color = color
//   }
//   esloganCompleto() {
//     return this.eslogan() + " modelo " + this.modelo + "talle " + this.talle + " de color " + this.color//this.eslogan llega por herencia 
//   }
// }

// let misZapas = new Modelo("Adidas", "AllStar ", 44, "negro");
// console.log(misZapas.esloganCompleto());

//GETTERS Y SETTERS
/*Estos metodos se usan para asignar y obtener atributos de un objeto
Los nombres de los setters y getters no se pueden ser iguales a los de las propiedades
porq si no se produce un bucle infinito,. Al acceder a la prop invocaríamos al métodp, que a su vez accede
a la prop, la prop llama al método
*/

// class Notebook {
//   constructor(brand, model) {
//     this._brand = brand;
//     this._model = model;
//   }
//   get brand() {
//     return this._brand;
//   }
//   set brand(newBrand) {
//     this._brand = newBrand;
//   }
// }

// const miLaptop = new Notebook("Mac", "Pro 3.0");

const myself = {
  firstName: "Nicolás",
  middleName: "Pedro",
  lastName: "Varela",
  
  //get me muestra los valores
  get fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}` 
  },
  //en modo set me permite cambiarlos "mutar los valores"
  set fullName(values) { 
    const names = values.split(" ");
    this.firstName = names[0]; 
    this.middleName = names[1];
    this.lastName = names[2];

  },

}

/*
MÉTODOS ESTÁTICOS:
son métodos de la CLASE y no de la instancia. No es necesario crear
un objeto para llamar a un método estático 
*/

class Rectangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  static area(base, height) {
    return base*height
  }
  static perimeter(lenght, width) {
    return 2 * (lenght + width);
  };
};

const rectangleA = new Rectangle(4, 3);
// console.log(rectangleA.area(4, 3)); //esto da error porq lo estoy llamando
//desde una instancia "area"
console.log(`El área es ${Rectangle.area(2, 3)}`) //acá me refiero a la clase "Rectangle"
// y no a una instancia particular de esa clase
console.log(`El perímetro es ${Rectangle.perimeter(2, 3)}`)


// Dejé en  de la clase 2