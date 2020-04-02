/*Va a encontrar por el nombre del id que le pusimos Estamos guardando el boton y
el menu*/
let btnMenu=document.getElementById('btnmenu');
let menu=document.getElementById('menu');
/*AL DAR CLICK*/
btnMenu.addEventListener('click',function(){
 'use strict';
 menu.classList.toggle('mostrar');
});