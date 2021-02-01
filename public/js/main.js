/*  */
let headerIcon = document.getElementById('headerIcon').addEventListener('click', verLista)
/* Para poder manipular el modal, bootstrap nos pide que lo instanciemos en una variable de esta manera */
let pantallaCarga = new bootstrap.Modal(document.getElementById('pantallaCarga'), {})
/*  */
let pantallaVacio = document.getElementById('pantallaVacio')
/*  */
let pantallaListado = document.getElementById('pantallaListado')
/* Cuando hacemos click en el boton agregar de la pantalla de carga, el addEventListener esta esperando para ejecutar la funcion guardarTodo */
let guardar = document.getElementById('pantallaCargaAgregar').addEventListener('click', guardarTodo)
/* Cuando presiono en cancelar en el botono cancelar de pantalla de carga, limpia los campos y cierra */
let cancelat = document.getElementById('pantallaCargaCancelar').addEventListener('click', cancelar)
/*  */
let pantallaListadoLista = document.getElementById('pantallaListado__lista').addEventListener('click', detalles)
/*  */
let pantallaDetalle = document.getElementById('pantallaDetalle')
/*  */
let botonCerrarDetalle = document.getElementById('botonCerrarDetalle').addEventListener('click', verLista)
/* Cuando presiono en agregar en version desktop  */
let botonAgregarEnDesktop = document.getElementById('btn-agregar-desktop').addEventListener('click', guardarTodoDesktop)
/* cramos boton cancelar en version desktop para que limpie los campos */
let botonCancelarEnDesktop = document.getElementById('btn-cancel-desktop').addEventListener('click', cancelarDesktop)
/* La funcion guardarTodo recibe los valores del formulario de carga y los pasa a la lista de compras */
function guardarTodo(){
    
    pantallaDetalle.style.display = 'none'
    /* Agarramos los elementos de input con su id dentro de getElementById */
    /* Value nos da el contenido del elemento */
    let producto = document.getElementById('pantallaCargaProducto').value
    let tipo = document.getElementById('pantallaCargaTipo').value
    let descripcion = document.getElementById('pantallaCargaDescripcion').value
    if (producto != "" && tipo != "" && descripcion != "") {
        /* De una forma mas practica que correcta vamos a limpiar los inputs */
        document.getElementById('pantallaCargaProducto').value = ''
        document.getElementById('pantallaCargaTipo').value = ''
        document.getElementById('pantallaCargaDescripcion').value = ''
        /* Creamos nuestro modelo de itemlist y le insertamos los valores que levantamos arriba */
        let modelo = `<li class="list-group-item pantallaListado__itemLista" aria-current="true" data-producto="${producto}" data-icono="${tipo}" data-descripcion="${descripcion}">
                    <img src="${tipo}" alt="${producto}"class="pantallaListado__itemLista__icono" data-producto="${producto}" data-icono="${tipo}" data-descripcion="${descripcion}">
                        <p class="pantallaListado__itemLista__nombre" data-producto="${producto}" data-icono="${tipo}" data-descripcion="${descripcion}">${producto}</p>
                    </li>`

        /* Agarro la lista de pantalla listado */
        let pantallaListadoLista = document.getElementById('pantallaListado__lista')
        /* Voy a insertarle nuevos elementos */
        pantallaListadoLista.innerHTML += modelo

        /* Al final, ocultamos el modal de carga que contiene el formulario */
        pantallaCarga.hide()

        pantallaVacio.style.display = 'none'
        pantallaListado.style.display = 'flex'
    } else {
        alert("ERROR~Debe completar todos los campos correctamente")
        pantallaCarga.hide()
        pantallaVacio.style.display = 'none'
        pantallaListado.style.display='flex'
    }
}

function guardarTodoDesktop() {

    pantallaDetalle.style.display = 'none'
    /* Agarramos los elementos de input con su id dentro de getElementById */
    /* Value nos da el contenido del elemento */
    let producto = document.getElementById('pantallaCargaProductoDesktop').value
    let tipo = document.getElementById('pantallaCargaTipoDesktop').value
    let descripcion = document.getElementById('pantallaCargaDescripcionDesktop').value
    if (producto != "" && tipo != "" && descripcion != "") {
        /* De una forma mas practica que correcta vamos a limpiar los inputs */
        document.getElementById('pantallaCargaProductoDesktop').value = ''
        document.getElementById('pantallaCargaTipoDesktop').value = ''
        document.getElementById('pantallaCargaDescripcionDesktop').value = ''
        /* Creamos nuestro modelo de itemlist y le insertamos los valores que levantamos arriba */
        let modelo = `<li class="list-group-item pantallaListado__itemLista" aria-current="true" data-producto="${producto}" data-icono="${tipo}" data-descripcion="${descripcion}">
                    <img src="${tipo}" alt="${producto}"class="pantallaListado__itemLista__icono" data-producto="${producto}" data-icono="${tipo}" data-descripcion="${descripcion}">
                        <p class="pantallaListado__itemLista__nombre" data-producto="${producto}" data-icono="${tipo}" data-descripcion="${descripcion}">${producto}</p>
                    </li>`

        /* Agarro la lista de pantalla listado */
        let pantallaListadoLista = document.getElementById('pantallaListado__lista')
        /* Voy a insertarle nuevos elementos */
        pantallaListadoLista.innerHTML += modelo

        /* Al final, ocultamos el modal de carga que contiene el formulario */
        pantallaCarga.hide()

        pantallaVacio.style.display = 'none'
        pantallaListado.style.display = 'flex'
    } else {
        alert("ERROR~Debe completar todos los campos correctamente")
        pantallaCarga.hide()
        pantallaVacio.style.display = 'none'
        pantallaListado.style.display='flex'
    }
}

/* funcion detalles nos muestra los detalles de la pantalla */
function detalles(e){
    document.getElementById("pantallaDetalleProducto").innerHTML = e.target.getAttribute('data-producto')
    document.getElementById("pantallaDetalleIcono").src = e.target.getAttribute('data-icono')
    document.getElementById("pantallaDetalleDescripcion").innerHTML = e.target.getAttribute('data-descripcion')
    /* Oculto pantalla listado y abro pantalla detalle */
    pantallaListado.style.display = 'none'
    pantallaDetalle.style.display = 'flex'
}

function verLista() {
    pantallaVacio.style.display = 'none'
    pantallaDetalle.style.display = 'none'
    pantallaCarga.hide()
    pantallaListado.style.display = 'flex'
}

function cancelarDesktop() {
    /* De una forma mas practica que correcta vamos a limpiar los inputs */
    document.getElementById('pantallaCargaProductoDesktop').value = ''
    document.getElementById('pantallaCargaTipoDesktop').value = ''
    document.getElementById('pantallaCargaDescripcionDesktop').value = ''
}

function cancelar() {
    /* De una forma mas practica que correcta vamos a limpiar los inputs */
    document.getElementById('pantallaCargaProducto').value = ''
    document.getElementById('pantallaCargaTipo').value = ''
    document.getElementById('pantallaCargaDescripcion').value = ''
    /* Al final, ocultamos el modal de carga que contiene el formulario */
    pantallaCarga.hide()
}