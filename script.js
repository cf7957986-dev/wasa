let carrito = [];

function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

    alert("Producto agregado al carrito");
}

function actualizarCarrito() {

    const lista = document.getElementById("listaCarrito");
    const contador = document.getElementById("contador");
    const totalHTML = document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {

        total += producto.precio;

        lista.innerHTML += `
            <div class="item-carrito">
                <span>${producto.nombre}</span>
                <span>
                    Bs ${producto.precio}
                    <button onclick="eliminarProducto(${index})">
                        ❌
                    </button>
                </span>
            </div>
        `;
    });

    contador.textContent = carrito.length;
    totalHTML.textContent = total;
}

function eliminarProducto(index) {

    carrito.splice(index, 1);

    actualizarCarrito();
}

function mostrarCarrito() {

    document.getElementById("carrito").style.display = "block";
}

function cerrarCarrito() {

    document.getElementById("carrito").style.display = "none";
}

function enviarPedido() {

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;

    if (nombre === "" || direccion === "") {
        alert("Completa tu nombre y dirección.");
        return;
    }

    let mensaje = "🛡️ *NUEVO PEDIDO - DAHUA SEGURIDAD*%0A%0A";

    mensaje += "👤 Cliente: " + nombre + "%0A";
    mensaje += "📍 Dirección: " + direccion + "%0A%0A";

    mensaje += "📦 *Productos:*%0A";

    let total = 0;

    carrito.forEach(producto => {

        mensaje += "• " + producto.nombre +
                   " - Bs " + producto.precio + "%0A";

        total += producto.precio;
    });

    mensaje += "%0A💰 *TOTAL: Bs " + total + "*";

    let telefono = "59171043777";

    let url = "https://wa.me/" + telefono + "?text=" + mensaje;

    window.open(url, "_blank");
}