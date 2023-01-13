//Crea dos clickListener, para los botones con id loginSuccess y loginFailure.
//En el primero crearemos un objeto login que sea correcto
const Login = {
  username: "admin",
  password: "passwd",
};
//llamaremos a la función para que de el resultado correcto.
const successbutton = document.getElementById("loginSuccess");
function successlogin() {
  alert("Success Login");
}
successbutton.addEventListener("click", successlogin);

//En el segundo crearemos un objeto login con parámetros incorrectos y llamaremos a login para que falle.
const Login2 = {
  username: "ososa",
  password: "2022",
};

const failbutton = document.getElementById("loginFailure");
function faillogin() {
  alert("Error Login");
}
failbutton.addEventListener("click", faillogin);
