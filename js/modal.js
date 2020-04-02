/*FUNCIONALIDAD PARA EL MODAL*/
let imagenes = document.querySelectorAll('.gallery__img');
let modal= document.querySelector('#modal');
let img = document.querySelector('#modal__img'); 
let boton = document.querySelector('#modal__boton');

/*Recorrido por las imagenes que tengo el querySelectorAll*/ 
for (let i = 0; i < imagenes.length; i++) {
    /*Cada vez que le de click se va a realizar el evento llamando a la clase modal--open del css que creamos*/
    imagenes[i].addEventListener('click',function(e){
       /*Para que el modal se muestre */
        modal.classList.toggle("modal--open");
        /*Obten la ruta de la imagen al dar click*/
        let src=e.target.src;
        /*Le enviamos el atributo que tenemos por la variable que contiene la imagen*/
        img.setAttribute("src",src);
    });
}
/*Para cerrar el boton de modal*/
boton.addEventListener('click',function(){
    /*Toogle agrega si lo tiene y si no lo tiene se lo quita con el modal*/
    modal.classList.toggle("modal--open");
})