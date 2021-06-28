/* Definicion de variables */
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

// Animacion del menu de navegacion

    btnMenu.addEventListener('click', () => {

        document.querySelector('.btn-menu i').classList.toggle('fa-times');

       if(activador) {
           menu.style.left = "0";
           menu.style.transition = "0.5s";
           
           activador = false;

       } else {

           activador = false;
           menu.style.left = "-100%";
           menu.style.transition = "0.5s";

           activador = true;
       }
    });

    /* Aplicar clase activo a los botones del menu */ 
let links = document.querySelectorAll('.lists li a');

links.forEach( (element) => {
    element.addEventListener('click', (event) => {
        links.forEach((link) => {
            link.classList.remove('active');
        });
    event.target.classList.add('active');
    });
});

/* Efecto scroll */

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {
 
 //Hide & Show - Scroll Menu (Function)
 let currentScrollPos = window.pageYOffset;

 if (prevScrollPos > currentScrollPos) {
   menuContent.style.top = '0px';
   menuContent.style.transition = '0.5s';
 }else{
   menuContent.style.top = '-60px';
   menuContent.style.transition = '0.5s';
 }
 prevScrollPos = currentScrollPos;
 
 //Scoll Menu & Go Top & See Down (Styles)
 let arriba = window.pageYOffset;

 //Conditions
 if(arriba <= 600){
   menuContent.style.borderBottom = 'none';

   //Ocultar Go Top
   goTop.style.right = '-100px';
 }else{
   menuContent.style.borderBottom = '3px solid #ff2e63';

   //Mostrar Go Top
   goTop.style.right = '0px';
 }
 
}

//Go Top Click
goTop.addEventListener('click', () => {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#btn-more');

abajo.addEventListener('click', () => {
 document.body.scrollTop = 600;
 document.documentElement.scrollTop = 600;
 
});