          <button class="btn-agregar" data-id="${producto.id}">
                gregar al carrito
        </button>
/** SECCIÓN CARRITO AGREGAR/ELIMINAR/VISUALIZAR---PERSISTENCIA EN LOCALSTORAGE */
let carrito = [];
contenedorProductos.addEventListener("click", function (evento) {
    console.log(evento.target);
    if (evento.target.classList.contains("btn-agregar")) {
        const idProducto = event.target.dataset.id;
        agregarProducto(idProducto);
    }
})
/*agregar al carrito*/
function agregarProducto(idProducto) {
    console.log(idProducto);
    const productoEncontrado = productosFritosColombianos.find(
        producto => producto.id === Number(idProducto)
    );
    carrito.push(productoEncontrado);
    console.log(carrito);
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
                <h3>${producto.nombre}</h3>
                <span>${producto.precio}</span>
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
    if (evento.target.classList.contains("btn-eliminar")) {
        const idProducto = evento.target.dataset.id;
        carrito = carrito.filter(
            producto => producto.id !== Number(idProducto)
        );
        renderizarCarrito();
        guardarCarrito();
    }
});
/**Persistencia Localstorage */
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");

    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }

    renderizarCarrito();
}
cargarCarrito();