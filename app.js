let items = []; //Vamos a guardar lo que escriben los usuarios en este array

const formulario = document.getElementById("formulario");
const input = document.getElementById("input-texto");
const lista = document.getElementById("lista");

const mostrarLista = () => {
  lista.innerHTML = items
    .map((item) => `<div class="tarjeta"> ${item} </div>`)
    .join("");
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //Prevenimos el comportamiento por defecto del formulario (que recargue la página)♣
  const texto = input.value.trim(); //Obtenemos el valor del input y eliminamos espacios al principio y al final
  if (texto === "") return; //Si el input está vacío, no hacemos nada

  items.push(texto); //Agregamos el texto al array♣
  input.value = ""; //Limpiamos el input
  mostrarLista(); //Mostramos la lista actualizada
});
