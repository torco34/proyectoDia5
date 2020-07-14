let barra = window.pageYOset;
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
// botones del menu
let botonMenu = document.querySelectorAll('.lis');
// console.log(botonMenu)
for (let i = 0; i < botonMenu.length; i++) {
    botonMenu[i].addEventListener('click', function(e) {
        
        let activar = e.target;
        if (activar.className == 'lis active') {
            removerClass()
            activar.innerHTML = "gusto.html"
            // .remove('active')
        } else {
            removerClass()
            activar.classList.add('active')
            // activar.classList.add('active')	seremplaza por
        }
        console.log(e.target)
    })
}

function removerClass() {
    for (let i = 0; i < botonMenu.length; i++) {
        botonMenu[i].classList.remove('active')
        
    }
};

function abrir() {
    document.getElementById("pagina").style.display = "block"
}

function cerrar() {
    document.getElementById("pagina").style.display = "none"
};

function body() {
    document.getElementById("gusto").style.display = "block"
};
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


// parte de donde va iniciar sesion
function ingresar() {
    correo = document.getElementById("correo").value;
    contrasena = document.getElementById("contrasena").value;
    if (correo === "") {}
}






// console.log(contrasena)
// let nombre = "Torcoroma";
// let apellidos = "Arias Ascanio";
//  function sumar(){
//  	document.getElementById('titulo').innerHTML = nombre +"  "+apellidos
//  };
// // section del interval
//  (function(){
//  	setInterval(function(){
//     let parrafo1 = document.getElementById('color1')
//     let parrafo2 = document.getElementById('color2'),
//     colores = ["#D77511","#55D711","#D91019","#130203","#61840B","#0B1484"]
//     coloresimples = ["#9093C0","#B190C0","#90C0B5","#BDD16F","#EBD9E5","#7F2930"]
//     parrafo1.style.color = colores[Math.floor(Math.random() * colores.length)]
//     parrafo2.style.color = coloresimples[Math.floor(Math.random() * coloresimples.length)]
//  	},1000);
//  }());
//  let nombre = "Torcoroma";
// let apellidos = "Arias Ascanio";
//  function sumar(){
//  	document.getElementById('titulo').innerHTML = nombre +"  "+apellidos
//  };
// // section del interval
//  (function(){
//  	setInterval(function(){
//     let parrafo1 = document.getElementById('color1')
//     let parrafo2 = document.getElementById('color2'),
//     colores = ["red","#55D711","#D91019","#130203","#61840B","#0B1484"]
//     coloresimples = ["#9093C0","#B190C0","#90C0B5","#BDD16F","#EBD9E5","#7F2930"]
//     parrafo1.style.color = colores[Math.floor(Math.random() * colores.length)]
//     parrafo2.style.color = coloresimples[Math.floor(Math.random() * coloresimples.length)]
//  	},3000);
//  }())