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

const buttonList = document.querySelector('#button-list').children;
console.log(buttonList)

for(let i=0; i<buttonList.length; i++){
    buttonList[i].addEventListener('click', function(){
        
     for(let j=0; j<buttonList.length; j++){
        buttonList[j].classList.remove("active")
     }
     this.classList.add("active")
//      // const target = this.getAttribute('data-target')
     
    })
}






// console.log(barra)
// // botones del menu
// let botonMenu = document.querySelectorAll('.lis');
// // console.log(botonMenu)
// for (let i = 0; i < botonMenu.length; i++) {
//     botonMenu[i].addEventListener('click', function(e) {
//         let activar = e.target;
//         if (activar.className == 'lis active') {
//             removerClass()
//             activar.innerHTML = "gusto.html"
//             // .remove('active')
//         } else {
//             removerClass()
//             activar.classList.add('active')
//             // activar.classList.add('active')  seremplaza por
//         }
//         console.log(e.target)
//     })
// }

// function removerClass() {
//     for (let i = 0; i < botonMenu.length; i++) {
//         botonMenu[i].classList.remove('active')
//     }
// };

 // section  from botton login


function abrir() {
    document.getElementById("pagina").style.display = "block"
}

function cerrar() {
    document.getElementById("pagina").style.display = "none"
};

function body() {
    document.getElementById("gusto").style.display = "block"
};
// parte de donde va iniciar sesion
function ingresar() {
    correo = document.getElementById("correo").value;
    contrasena = document.getElementById("contrasena").value;
    if (correo === "") {}
};
 
















// // parte de donde va iniciar sesion
// function ingresar() {
//     correo = document.getElementById("correo").value;
//     contrasena = document.getElementById("contrasena").value;
//     if (correo === "") {}
// }
// // console.log(contrasena)
// // let nombre = "Torcoroma";
// // let apellidos = "Arias Ascanio";
// //  function sumar(){
// //   document.getElementById('titulo').innerHTML = nombre +"  "+apellidos
// //  };
// // // section del interval
// //  (function(){
// //   setInterval(function(){
// //     let parrafo1 = document.getElementById('color1')
// //     let parrafo2 = document.getElementById('color2'),
// //     colores = ["#D77511","#55D711","#D91019","#130203","#61840B","#0B1484"]
// //     coloresimples = ["#9093C0","#B190C0","#90C0B5","#BDD16F","#EBD9E5","#7F2930"]
// //     parrafo1.style.color = colores[Math.floor(Math.random() * colores.length)]
// //     parrafo2.style.color = coloresimples[Math.floor(Math.random() * coloresimples.length)]
// //   },1000);
// //  }());
// //  let nombre = "Torcoroma";
// // let apellidos = "Arias Ascanio";
// //  function sumar(){
// //   document.getElementById('titulo').innerHTML = nombre +"  "+apellidos
// //  };
// // // section del interval
// //  (function(){
// //   setInterval(function(){
// //     let parrafo1 = document.getElementById('color1')
// //     let parrafo2 = document.getElementById('color2'),
// //     colores = ["red","#55D711","#D91019","#130203","#61840B","#0B1484"]
// //     coloresimples = ["#9093C0","#B190C0","#90C0B5","#BDD16F","#EBD9E5","#7F2930"]
// //     parrafo1.style.color = colores[Math.floor(Math.random() * colores.length)]
// //     parrafo2.style.color = coloresimples[Math.floor(Math.random() * coloresimples.length)]
// //   },3000);
// //  }())