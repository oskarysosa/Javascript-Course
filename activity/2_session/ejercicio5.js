//Crea dos clickListener, para los botones con id loginSuccess y loginFailure.
//En el primero crearemos un objeto login que sea correcto
const Login = {
  username: "admin",
  password: "passwd",
};
//llamaremos a la función para que de el resultado correcto.
function successlogin() {
  const successbutton = document.getElementById("loginSuccess");
  successbutton.addEventListener("click", Event);
}
successlogin.call(Login);

//En el segundo crearemos un objeto login con parámetros incorrectos y llamaremos a login para que falle.
const Login2 = {
  username: "ososa",
  password: "2022",
};

function faillogin() {
  const failbutton = document.getElementById("loginFailure");
  failbutton.addEventListener("click", Login);
}
faillogin.call(Login);
