//Escribe un programa que tome como entrada un objeto y devuelva una lista con sus propiedades.
//Solo puede tener como entrada un objeto y el tipo de vuelta tiene que ser un array.

//Objeto
const Car = {
  Brand: "Volkswagen",
  Model: "Gol",
  Color: "Black",
  Year: 2005,
};

console.log(Object.keys(Car));
