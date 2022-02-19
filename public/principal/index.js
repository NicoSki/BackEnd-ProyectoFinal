//aca voy a crear las cartas de presentacion dinamicas
let carta = document.getElementById("cartas");

const cartas = [
    { img: "https://static.dafiti.com.ar/p/quiksilver-5423-581264-1-product.jpg", titulo: "Remeras"},
    { img: "https://static.dafiti.com.ar/p/quiksilver-0972-428714-1-product.jpg", titulo: "Camisas"},
    { img: "https://static.dafiti.com.ar/p/quiksilver-1185-993123-1-product.jpg", titulo: "Pantalones"},
    { img: "https://static.dafiti.com.ar/p/quiksilver-7707-36694-1-product.jpg", titulo: "Zapatillas"},
];

const html = cartas.map(e => (`
<div class="card" style="width: 18rem;">
  <img src=${e.img} class="card-img-top" alt="img" />
  <div class="card-body">
    <h5 class="card-title">${e.titulo}</h5>
    <a href="/remeras.html" class="btn btn-primary">Ver más</a>
  </div>
</div> 
`
))

carta.innerHTML = html

