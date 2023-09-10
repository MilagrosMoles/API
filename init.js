document.addEventListener('DOMContentLoaded', function(){

  // creo una constante para el boton
  const button = document.getElementById("boton")

  // agrego un evento click al boton
  button.addEventListener('click', function(){
      // Obtén una referencia al elemento con el ID "gato".
      const gatitos = document.getElementById("gato");
    
      // realizo una solicitud a la API para obtener las imagenes de gatos
      fetch('https://api.thecatapi.com/v1/images/search?limit=10') 
      .then(response => response.json()) 
      .then(data => {
          // creo la constante para guardar un numero aleatorio usando la funcion obtenerNumeroRandom
          const numeroAleatorio = obtenerNumeroRandom()
          // actualiza el contenido del elemento con ID "gato" con una imagen de gato
          gatitos.innerHTML = `
              <img src="${data[numeroAleatorio].url}" alt="${data[numeroAleatorio].id}">
          `;
          console.log(data[numeroAleatorio].url) // muestra la URL de la imagen en la consola (para corroborar que funciona correctamente)
      })
      .catch(error => {
          console.error("Hubo un error:", error); // encuentra cualquier error que haya en la solicitud
      });
  });

  // esta funcion sirve para devolver un numero aleatorio entre 0 y 9
  function obtenerNumeroRandom() {
      return Math.floor(Math.random() * 10);
  }
});