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



// parte de la selection


const boton=document.querySelector('#boton').children;
const container3 = document.querySelector('.container3').children;
console.log(container3)
for(let i=0; i<boton.length; i++) {
	boton[i].addEventListener("click", function(){

		for(let j=0; j<boton.length; j++){
			boton[j].classList.remove("active")
		}
      this.classList.add("active")
      const target=this.getAttribute("data-target")
      for (let k=0; k<container3.length - 1; k++) {
         container3[k].style.display="none";

         if(container3[k].getAttribute('data-id')===target){
         	container3[k].style.display="block";
         }
      }
     
	})
	
}
 // console.log(this.getAttribute("data-target"))
//  console.log(this.innerHTML)
// console.log(boton)