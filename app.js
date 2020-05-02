window.addEventListener("load", function () {
  var boton = document.getElementById("enviar");
  var names = document.getElementById("name");
  boton.addEventListener("click", function () {
    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    if (nombre.trim() == null || nombre.trim().length <= 5 || !isNaN(nombre)) {
      alert("El nombre no es válido");
      names.innerHTML("n");
      return false;
    }
    if (
      apellidos.trim() == null ||
      apellidos.trim().length == 0 ||
      !isNaN(apellidos)
    ) {
      alert("Los apellidos no son válidos");
      return false;
    }
  });
});
