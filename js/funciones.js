function editarArticulo(id, articulo, cantidad, disponibilidad, costo, estado) {
    console.log(id, articulo, cantidad, disponibilidad, costo, estado);
    var inputEditar = document.getElementById("idArticulo");
    var inputArticulo = document.getElementById("articulo");
    var inputCantidad = document.getElementById("cantidad");
    var inputDisponibilidad = document.getElementById("disponibilidad");
    var inputCosto = document.getElementById("costo");
    var inputEstado = document.getElementById("estado");
    inputEditar.value = id;
    inputArticulo.value = articulo;
    inputCantidad.value = cantidad;
    inputDisponibilidad.value = disponibilidad;
    inputCosto.value = costo;
    inputEstado.value = estado;
}
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('eliminar')

function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + 'danger' + ' alert-dismissible" role="alert">' + 'Se ha eliminado el articulo!' + '</div>'

    alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
    alertTrigger.addEventListener('click', function() {
        alert('Nice, you triggered this alert message!', 'danger')
    })
}