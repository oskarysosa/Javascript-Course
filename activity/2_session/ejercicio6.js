//Crea dos clickListener, para los botones con id loginSuccessAsync y loginFailureAsync.

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
