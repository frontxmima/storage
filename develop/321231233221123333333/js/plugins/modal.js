function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('vmodal')
  modal.insertAdjacentHTML('afterbegin',`
  <div class="modal-overlay">
    <div class="modal-window">
      <div class="modal-body">
          <h2>Модальное окно</h2>
         <span class="modal-close">&times;</span>
        <div class="modal__text">
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <div class="modal-head"></div>
      <div class="modal-footer">
        <button>ok</button>
        <button>cancel</button>
      </div>
    </div>
  </div>
  `)

  document.body.appendChild(modal)
  return modal
} 

$.modal = function(options) {
  const $modal = _createModal(options)

  return {
    open() {
      $modal.classList.add('open')
    },
    close() {
      $modal.classList.remove('open')
    },
    destroy() {}
  }
}