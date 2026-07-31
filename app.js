const productosFritosColombianos = [
  {
    id: 1,
    nombre: "Empanada",
    precio: "3.000 COP",
    region: "Nacional (Variaciones en Valle, Cauca, Antioquia)",
    descripcion: "Masa de maíz crujiente rellena tradicionalmente de carne, pollo, guiso o papa.",
    linkImagen: "https://cdn.aarp.net/content/dam/aarp/food/recipes/2018/05/1140-colombian-empanadas-esp.jpg"
  },
  {
    id: 2,
    nombre: "Arepa de Huevo",
    precio: "4.500 COP",
    region: "Caribe",
    descripcion: "Arepa de maíz frita rellena con un huevo entero y, opcionalmente, carne picada.",
    linkImagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/VAONOW7YSZF65BOB5QKTQ2OZCA.jpg"
  },
  {
    id: 3,
    nombre: "Aborrajado",
    precio: "5.000 COP",
    region: "Valle del Cauca",
    descripcion: "Plátano maduro frito relleno de queso blanco y envuelto en una mezcla de harina y huevo.",
    linkImagen: "https://k-listo.com/wp-content/uploads/2025/03/ABORRAJADOS_CASEROS_BOCADILLO_Mesa-de-trabajo-1-1.jpg"
  },
  {
    id: 4,
    nombre: "Carimañola",
    precio: "3.500 COP",
    region: "Caribe",
    descripcion: "Frito de masa de yuca en forma de torpedo, rellena de queso costeño o carne molida.",
    linkImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcPnGp1ussK5ARLboIqPE9RigW0W7RVSSPKeQHzOH0Lq1W_ZCpngsO5a5&s=10"
  },
  {
    id: 5,
    nombre: "Papa Rellena",
    precio: "4.000 COP",
    region: "Andina",
    descripcion: "Bola de puré de papa rellena de carne molida, huevo cocido y arroz, rebozada y frita.",
    linkImagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/4YMEEW2QBVGALOUC7LSPUFNKMU.jpg"
  },
  {
    id: 6,
    nombre: "Marranita",
    precio: "4.500 COP",
    region: "Valle del Cauca",
    descripcion: "Bola de plátano verde frito majado y rellena de chicharrón crujiente.",
    linkImagen: "https://www.ensumesa.com/pix/recetas/marranitas1.jpg"
  },
  {
    id: 7,
    nombre: "Chicharrón",
    precio: "8.000 COP",
    region: "Andina (Especialmente Antioquia)",
    descripcion: "Corte de piel y carne de cerdo frito hasta lograr una textura muy crujiente.",
    linkImagen: "https://media-cdn.tripadvisor.com/media/photo-s/0b/10/f6/1f/chicharroncitos.jpg"
  },
  {
    id: 8,
    nombre: "Patacón / Tostón",
    precio: "3.500 COP",
    region: "Nacional (Muy popular en Caribe y Pacífico)",
    descripcion: "Trozos de plátano verde aplanados y fritos dos veces.",
    linkImagen: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/recetas-comida-colombiana/HOGAO-1200x709.jpg"
  },
  {
    id: 9,
    nombre: "Buñuelo",
    precio: "2.500 COP",
    region: "Nacional",
    descripcion: "Esfera frita elaborada a base de queso molido (queso costeño) y fécula de maíz.",
    linkImagen: "https://sweetysalado.com/wp-content/uploads/2024/12/DSC_1183.jpg"
  },
  {
    id: 10,
    nombre: "Pandebono Frito",
    precio: "2.500 COP",
    region: "Valle del Cauca",
    descripcion: "Masa tradicional de almidón de yuca y queso que en lugar de hornearse se fríe.",
    linkImagen: "https://www.elespectador.com/resizer/v2/DGCPPR7ZERE6RCOATID6UP6CMM.jpg?auth=f1abe9d86845950e7507f9f9c21fa98d58d4219fe6acdc49ea63afb112caf4b0&width=920&height=613&smart=true&quality=60"
  },
  {
    id: 11,
    nombre: "Dedito de Queso",
    precio: "3.000 COP",
    region: "Caribe",
    descripcion: "Barra de queso costeño envuelta en harina de trigo y frita hasta dorar.",
    linkImagen: "https://www.campi.com.co/wp-content/uploads/2021/03/Deditos-De-Queso-Imagen-Destacada.jpg"
  },
  {
    id: 12,
    nombre: "Buñuelo de Frijol Cabecita Negra",
    precio: "2.500 COP",
    region: "Caribe",
    descripcion: "Frito salado preparado a partir de la masa molida del frijol cabecita negra.",
    linkImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhJ4ZRDReNUAWfUUN6Mjd5SZAkvefkjwFytnaiFe76qir5rSFXlNVESU&s=10"
  },
  {
    id: 13,
    nombre: "Papa Criolla Frita",
    precio: "5.000 COP",
    region: "Andina",
    descripcion: "Papas amarillas pequeñas fritas enteras con su piel hasta que quedan doradas y suaves.",
    linkImagen: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/RAHLOC5TXJERFGGO3MZWETZHSU.jpg"
  },
  {
    id: 14,
    nombre: "Pastel de Yuca",
    precio: "4.000 COP",
    region: "Caribe y Andina",
    descripcion: "Masa frita a base de yuca prensada rellena de carne, arroz y huevo.",
    linkImagen: "https://premier.com.co/wp-content/uploads/2024/04/pastel-de-yuca.webp"
  },
  {
    id: 15,
    nombre: "Churro",
    precio: "2.000 COP",
    region: "Nacional",
    descripcion: "Masa frita en forma de tira o espiral, espolvoreada con azúcar granulada.",
    linkImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmwrE0CNmJF50RqUEmMkY29dgHVH-TY3gTS8pAM9qvEDnhToK-eb5U0Q&s=10"
  },
  {
    id: 16,
    nombre: "Tajadas de Plátano Maduro",
    precio: "3.000 COP",
    region: "Nacional",
    descripcion: "Láminas de plátano maduro fritas directamente en aceite caliente.",
    linkImagen: "https://familiakitchen.com/wp-content/uploads/2021/11/Tajadas-Venezuela-e1638245308638.jpg"
  },
  {
    id: 17,
    nombre: "Empanada de Añejo",
    precio: "3.500 COP",
    region: "Nariño",
    descripcion: "Empanada hecha con una masa de maíz fermentado que le da un sabor ácido característico.",
    linkImagen: "https://salsasaderezos.com/cdn/shop/articles/Receta-Empanadas-de-Anejo-Aderezos-S_1200x1200.jpg?v=1728565840"
  },
  {
    id: 18,
    nombre: "Empanada de Pipíán",
    precio: "2.000 COP",
    region: "Cauca (Popayán)",
    descripcion: "Empanada pequeña rellena de un guiso especial de papa colorada, maní molido y especias.",
    linkImagen: "https://lacosechaparrillada.com/wp-content/uploads/2025/09/Articulo2.webp"
  }
];

const contenedorProductos = document.getElementById("productos")

function renderizarProductos(array) {
  const htmlTarjetas = array.map(producto => {
    return `
      <div class="card-producto">
        <div class="card-imagen">
          <img src="${producto.linkImagen}" alt="${producto.nombre}" loading="lazy">
        </div>
        <div class="card-contenido">
          <div class="card-header">
            <h2>${producto.nombre}</h2>
            <span class="precio">${producto.precio}</span>
          </div>
          <p class="region"><strong>Origen:</strong> ${producto.region}</p>
          <p class="descripcion">${producto.descripcion}</p>
          <button class= "boton-agregar-carrito" data-id="${producto.id}"><i class="fa-solid fa-cart-shopping"></i> Agregar al Carrito </button>
        </div>
      </div>  
    `;
  }).join('');

  contenedorProductos.innerHTML = htmlTarjetas;
}

renderizarProductos(productosFritosColombianos)


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