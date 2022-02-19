//aca voy a crear las cartas de presentacion dinamicas de las remeras
let remera = document.getElementById("remeras");

//estas remeras son a modo de ejemplo para que el array no este vacio
const remeras = [
    { img: "http://d2r9epyceweg5n.cloudfront.net/stores/001/146/110/products/quiksilver-9973-073875-1-product1-44b0abda7a2dd8506f16222233679159-640-0.jpg", titulo: "Remera1"},
    { img: "https://static.dafiti.com.ar/p/quiksilver-9454-876658-1-product.jpg", titulo: "Remera2"},
    { img: "https://kingofkings.com.ar/store/wp-content/uploads/2020/10/remera-mc-modern-legends-44888.jpg", titulo: "Remera3"},
    { img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/130/753/products/13a588b7-2423-49b4-a264-8c81cc074cb91-fe7977a03c2e032f2815995357827071-480-0.jpeg", titulo: "Remera4"},
];

const html = remeras.map(e => (`
<div class="card" style="width: 18rem;">
  <img src=${e.img} class="card-img-top" alt="img" />
  <div class="card-body">
    <h5 class="card-title">${e.titulo}</h5>
    <a href="/detalle.html" class="btn btn-primary">Detalle</a>
  </div>
</div> 
`
))

remera.innerHTML = html