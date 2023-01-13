//Crea dos clickListener, para los botones con id loginSuccessAsync y loginFailureAsync.

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
