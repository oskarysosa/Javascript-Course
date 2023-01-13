//Crea una clase con el formato ES6
class Login {
  //Atributos user, password
  constructor(user, password) {
    this.user = user;
    this.password = password;
  }

  //method
  login = () => {
    if (this.user === "admin" && this.password === "passwd") {
      alert("Usuario Logueado!");
    } else {
      alert("Usuario o Contraseña incorrecta");
    }
  };
}
let login = new Login("admin", "passwd"); // alert -> User logged in
Login.login();
let logbad = new Login("pepe", "bad").login(); // alert -> User or passwd incorrect
Login.login();
