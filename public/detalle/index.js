const detalle = document.getElementById("detalle")

const particular = {
    id: 1,
    nombre: "Remera1",
    descripcion: "Remera de algodon",
    img: "http://d2r9epyceweg5n.cloudfront.net/stores/001/146/110/products/quiksilver-9973-073875-1-product1-44b0abda7a2dd8506f16222233679159-640-0.jpg",
    precio: 2500,
    stock: 50,
}

const html =`
<div class="card" style="width: 18rem;">
  <img src=${particular.img} class="card-img-top" alt="img" />
  <div class="card-body">
    <h5 class="card-title">${particular.nombre}</h5>
    <p>${particular.descripcion}</p>
    <p>Quedan:${particular.stock}</p>
    <p>$ ${particular.precio}</p>
  </div>
</div> 
`


detalle.innerHTML = html