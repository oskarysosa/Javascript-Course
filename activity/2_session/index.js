// Ejercicio 1

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4

// Ejercicio 5
const Login = {
  username: "admin",
  password: "passwd",
};
//llamaremos a la función para que de el resultado correcto.
function successlogin() {
  const successbutton = document.getElementById("loginSuccess");
  successbutton.addEventListener("click", Login);
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
// Ejercicio 6

function Asyncbutton() {
  const SuccessAsync = document.getElementById("loginSuccessAsync");
  SuccessAsync.addEventListener("click", async);
  loginWitUsername("admin", "passwd")
    .then((resolved) => {
      alert(resolved);
    })
    .catch((rejected) => {
      alert(rejected);
    });
}

function Asyncbutton1() {
  const FailureAsync = document.getElementById("loginFailureAsync");
  btnLoginFailureAsync.addEventListener("click", async);
  loginWitUsername("ososa", "2022")
    .then((resolved) => {
      alert(resolved);
    })
    .catch((rejected) => {
      alert(rejected);
    });
}

let loginWitUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};
