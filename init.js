document.addEventListener('DOMContentLoaded', function(){



const button = document.getElementById("boton")

button.addEventListener('click', function(){
    const gatitos = document.getElementById("gato");
  
    fetch('https://api.thecatapi.com/v1/images/search?limit=10') 
  .then(response => response.json())
  .then(data => {

    const numeroAleatorio = obtenerNumeroRandom()
    gatitos.innerHTML = `
      <img src="${data[numeroAleatorio].url}" alt="${data[numeroAleatorio].id}">
    `;
    console.log(data[numeroAleatorio].url)
  })
  .catch(error => {
    console.error("Hubo un error:", error);
  });
});

function obtenerNumeroRandom() {
    return Math.floor(Math.random() * 10);
}
})