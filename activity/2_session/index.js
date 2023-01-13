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

// Ejercicio 6

const SuccessAsync = document.getElementById("loginSuccessAsync");
function Asyncbutton() {
  alert("Success Login");
}
SuccessAsync.addEventListener("click", Asyncbutton);
loginWitUsername("admin", "passwd")
  .then((resolved) => {
    alert(resolved);
  })
  .catch((rejected) => {
    alert(rejected);
  });

const FailureAsync = document.getElementById("loginFailureAsync");
function Asyncbutton1() {
  alert("Error Login");
}
FailureAsync.addEventListener("click", Asyncbutton1);
loginWitUsername("ososa", "2022")
  .then((resolved) => {
    alert(resolved);
  })
  .catch((rejected) => {
    alert(rejected);
  });

//

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
