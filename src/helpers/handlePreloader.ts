function isDisableLayer() {
  return document.getElementById('layer')?.classList.remove('d-none');
}

function isEnableLayer() {
  return document.getElementById('layer')?.classList.add('d-none');
}

export {
  isDisableLayer,
  isEnableLayer
}