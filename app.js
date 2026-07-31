<button class="boton-agregar-carrito" data-id="${producto.id}">
                gregar al carrito
        </button>
/** SECCIÓN CARRITO AGREGAR/ELIMINAR/VISUALIZAR---PERSISTENCIA EN LOCALSTORAGE */
let carrito = [];
contenedorProductos.addEventListener("click", function (evento) {
    const boton = evento.target.closest(".boton-agregar-carrito");

    if (!boton) return;
    const idProducto = boton.dataset.id;
    agregarProducto(idProducto);
})
/*agregar al carrito*/
function agregarProducto(idProducto) {
    const productoEncontrado = productosFritosColombianos.find(
        producto => producto.id === Number(idProducto)
    );
    if(!productoEncontrado) return;
    carrito.push(productoEncontrado);
    renderizarCarrito();
    guardarCarrito();
}
/*Visualizar el carrito*/
const contenedorCarrito = document.getElementById("carrito");
function renderizarCarrito() {
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
        return;
    }
    const htmlCarrito = carrito.map(producto => {
        return `
            <div class="producto-carrito">
                <div class="info-producto">
                    <h3>${producto.nombre}</h3>
                    <span>${producto.precio}</span>
                </div>
                <button class="btn-eliminar" data-id="${producto.id}">
                    Eliminar
                </button>
            </div>
        `;
    }).join("");
    contenedorCarrito.innerHTML = htmlCarrito;
}
/*Eliminar del carrito*/
contenedorCarrito.addEventListener("click", function (evento) {
    const botonEliminar = evento.target.closest(".btn-eliminar");
    if (!botonEliminar) return;
    const idProducto = Number(botonEliminar.dataset.id);
    const indice = carrito.findIndex(
        producto => producto.id === idProducto
    );
    if (indice !== -1) {
        carrito.splice(indice, 1);
        renderizarCarrito();
        guardarCarrito();
    }
    console.log("Se hizo clic", evento.target);
    console.log(idProducto);
});
/**Persistencia Localstorage */
function guardarCarrito() {
    localStorage.setItem("producto-carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem("producto-carrito");

    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }

    renderizarCarrito();
}
cargarCarrito();