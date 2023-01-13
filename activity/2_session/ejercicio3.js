//Crea una clase a la que llamaremos "InvertirCadena" con las siguientes propiedades:
class InvertirCadena {
  constructor(message) {
    this.name = "InvertirCadena";
  }
}
//Un atributo llamado cadenaInvertir que sea una cadena vacía.
let cadenaInvertir = "";

//Una función en formato arrow function, que tome el atributo cadenaInvertir e imprima en pantalla el resultado invertido.
const str = cadenaInvertir;
const newStr = str.split("").reduceRight((acc, cur) => {
  return acc + cur;
}, "");

try {
  //Si el parámetro de la cadena cadenaInvertir es vacío, lance un error (throw).
  if (cadenaInvertir === "") {
    throw new Error("Frase no encontrada");
  } else {
    console.log(newStr);
  }
} catch (e) {
  console.log(e.message);
}

//Ahora instancia la clase en un objeto que llamaremos invertirCadena.
const invertirCadena = new InvertirCadena("");
//Optional Chaining para que no se rompa
InvertirCadena.newStr?.();
