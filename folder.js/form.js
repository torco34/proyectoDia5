let barra = window.pageYOffset;
window.onscroll = function() {
    let desplaza = window.pageYOffset;
    if (barra > desplaza) {
        document.getElementById('navbar').style.top = "0px";
        document.getElementById('navbar').style.transition = "0.5s";
    } else {
        document.getElementById('navbar').style.top = "-160px"
        document.getElementById("navbar").style.transition = "0.5s";
    }
    barra = desplaza;
};

alert('hello')
    // parte del formulario
    // tarea: arreglarlo con menos 
    // codigo un array, hecho por mi
    function validar() {
        let nombre, apellidos, correo, confirmar, usuario, confirm, telefono;
        nombre = document.getElementById('nombre').value;
        apellidos = document.getElementById('apellidos').value;
        correo = document.getElementById('correo').value;
        confirmar = document.getElementById('confirmar').value;
        usuario = document.getElementById('usuario').value;
        confirmy = document.getElementById('confirmy').value;
        telefono = document.getElementById('telefono').value;
        expresion = /\w+@\w+\.+[a-z]/;
        if (nombre === "" || apellidos === "" || correo === "" || confirmar === "" || usuario === "" || confirmy === "" || telefono === "") {
            alert('Todos los campos son necesarios')
            return false;
        } else if (nombre.length > 10 || apellidos.length > 10) {
            alert("Demaciados caracteres en el nombreo el apellido")
            return false
        } else if (correo.length > 40 || confirmar.length > 40 || correo != confirmar) {
            alert("No conside tu correo")
            return false
        } else if (!expresion.test(correo)) {
            alert('El correo no es valido')
            return false
        } else if (usuario.length > 15 || confirmy.length > 15 || usuario != confirmy) {
            alert("tu contrasena no concide o muchos caracteres")
            return false
        } else if (telefono.length > 10) {
            alert("De maciado carecteres en el telefono")
            return false
        } else if (isNaN(telefono)) {
            alert(" telefonos ingresado no es numero")
            return false
        }
    };
