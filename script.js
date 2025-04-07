function irAListaItems() {
  window.location.href = 'items.html';
}

function seleccionarItem(item) {
  localStorage.setItem('itemSeleccionado', item);
  window.location.href = 'selected.html';
}
