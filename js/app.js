import { happy_birthday } from "./days_date.js";


let $select = document.querySelector('.select-css');
let valor = 0;


// Evento cuando carga
document.addEventListener('DOMContentLoaded', (e) => {

    happy_birthday('#days', '#hours', '#mins', '#seconds', '#title', valor);

});



// Evento para verificar si cambia
document.addEventListener('change', (e) => {

    // Puede ser (text, value) en el select
    valor = $select.options[$select.selectedIndex].value;

    happy_birthday('#days', '#hours', '#mins', '#seconds', '#title', valor);

});


