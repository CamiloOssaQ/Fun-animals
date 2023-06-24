function redireccionar(enlace) {
  window.location.href = enlace;
}

window.addEventListener('DOMContentLoaded', function () {
  var productoLista = document.querySelector('.producto-lista');

  var productoItems = productoLista.getElementsByTagName('li');
  var totalProductos = productoItems.length;

  var anchoProducto = productoItems[0].offsetWidth;
  var anchoBarra = anchoProducto * totalProductos;

  productoLista.style.width = anchoBarra + 'px';

  var tiempoAnimacion = 4;
  var tiempoIntervalo = tiempoAnimacion * 1000;

  var avanceBarra = function () {
    var margenIzquierdo = parseFloat(getComputedStyle(productoLista).marginLeft);

    if (margenIzquierdo === -anchoProducto) {
      productoLista.style.marginLeft = '0';
    } else {
      productoLista.style.marginLeft = margenIzquierdo - anchoProducto + 'px';
    }
  };

  var intervalo = setInterval(avanceBarra, tiempoIntervalo);

  productoLista.addEventListener('mouseover', function () {
    clearInterval(intervalo);
  });

  productoLista.addEventListener('mouseout', function () {
    intervalo = setInterval(avanceBarra, tiempoIntervalo);
  });
});