// Lista de productos (simulada, en un proyecto real usarías una base de datos)
let productos = [];

// Mostrar el formulario para añadir un nuevo producto
function mostrarFormularioProducto() {
    document.getElementById('form-producto').style.display = 'block';
    document.getElementById('formulario').reset();
    document.getElementById('titulo-form').textContent = 'Añadir Nuevo Producto';
    document.getElementById('producto-id').value = ''; // Limpiar ID del producto
}

// Guardar un producto (añadir o modificar)
function guardarProducto(event) {
    event.preventDefault();

    // Obtener datos del formulario
    const id = document.getElementById('producto-id').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').value;

    const producto = {
        id: id ? id : Date.now(),  // Si el ID está vacío, generar uno nuevo
        nombre,
        descripcion,
        precio: parseFloat(precio),
        imagen
    };

    if (id) {
        // Modificar producto existente
        productos = productos.map(p => p.id === producto.id ? producto : p);
    } else {
        // Añadir nuevo producto
        productos.push(producto);
    }

    mostrarProductos();
    document.getElementById('form-producto').style.display = 'none';  // Ocultar el formulario
}

// Mostrar los productos en la lista
function mostrarProductos() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';  // Limpiar la lista de productos

    productos.forEach(producto => {
        let divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        
        divProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <button onclick="editarProducto(${producto.id})">Editar</button>
            <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
        `;
        
        listaProductos.appendChild(divProducto);
    });
}

// Editar un producto
function editarProducto(id) {
    const producto = productos.find(p => p.id === id);
    
    // Rellenar el formulario con los datos del producto
    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('descripcion').value = producto.descripcion;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('imagen').value = producto.imagen;
    document.getElementById('producto-id').value = producto.id;
    
    // Mostrar formulario para editar
    document.getElementById('form-producto').style.display = 'block';
    document.getElementById('titulo-form').textContent = 'Editar Producto';
}

// Eliminar un producto
function eliminarProducto(id) {
    productos = productos.filter(p => p.id !== id);
    mostrarProductos();
}

// Inicializar mostrando productos (vacío al principio)
mostrarProductos();
