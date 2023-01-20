// Ejercicio 1
//Crea una interfaz 'Person' que tenga como atributos 'name', 'age' y 'profession'.
interface Person {
  name: string;
  age: number;
  profession: string;
}
//Ahora define una arrow function que tenga como parámetro esta interfaz
let details = (person: Person) => {
  //Que devuelva un array con el valor de sus propiedades
  return [person.name, person.age, person.profession];
};

let p1 = { name: "Oskary", age: 32, profession: "Engineer" };

console.log(details(p1));

// Ejercicio 2
//Escribe una función llamada sumOrConcatenate que acepte dos parámetros.
function sumOrConcatenate(a: string | number, b: string | number) {
  //Cada uno de estos parámetros podrá ser de tipo number o string.
  if (typeof a === "number" && typeof b === "number") {
    //La función devolverá una suma si los dos parámetros son números
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    //Una concatenación con el símbolo `-` si son los dos `strings
    return a + "-" + b;
  }
  if (typeof a === "number" && typeof b === "string") {
    //Una cadena concatenada con `:` si uno es un number y el otro string.
    return b + ":" + a;
  }
}
console.log(sumOrConcatenate(4, 5));
console.log(sumOrConcatenate("hello", "world"));
console.log(sumOrConcatenate(4, "hello"));

// Ejercicio 3
//Crea dos interfaces, una llamada `Car` y otra `Motorcycle`.
interface Car {
  //La primera tendrá las propiedades `tires` (number)
  //`turnOnEngine()` (función que devuelve void) y `pressPedal()` (función que devuelve void).
  tires: number;
  turnOnEngine: () => void;
  pressPedal: () => void;
}
interface Motorcycle {
  //La segunda tendrá las propiedades `tires` (number)
  // `turnOnEngine()` (función que devuelve void) y `openThrottle()` (función que devuelve void).
  tires: number;
  turnOnEngine: () => void;
  openThrottle: () => void;
}

function turnOnEngine() {}

function pressPedal() {}

function openThrottle() {}

//Escribe una función que acepte un parámetro que pueda ser `Car` o `Motorcycle` que,
//Primero llame a turnOnEngine, y luego si es Car llame a pressPedal pero si es Motorcycle llame a openThrottle().
function isCar(vehicule: Car | Motorcycle): vehicule is Car {
  if (isCar(vehicule)) {
    return (vehicule as Car).pressPedal !== undefined;
  } else {
    return (vehicule as Motorcycle).openThrottle !== undefined;
  }
}

//Ejercicio 4
//Crea una `función genérica`, que acepte un array que pueda contener `strings` y `numbers` y
//devuelva el mismo array sin el primer elemento.

const strArray: string[] = [
  "Hello",
  "World",
  "Im",
  "a",
  "Full",
  "Stack",
  "Developer",
];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number | string> = ["Hello", "I", "have", 3, "tasks"];
const unsupportedArray = [{ name: "Lucas", surname: "Fernandez" }, "Hello", 22];

const removeFirstEntry = (arr: (number | string)[]) => {
  arr.shift();
  console.log(arr);
};

const newStrArray = removeFirstEntry(strArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const newNumArray = removeFirstEntry(numArray); // --> [2, 3, 4, 5, 6, 7];
const newMixedArray = removeFirstEntry(mixedArray); // --> ['I', 'have', 3, 'tasks'];
//const newUnsupportedArray = removeFirstEntry(unsupportedArray); --> will fail
