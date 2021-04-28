(() => {
  const refs = {
    openModalAboutBtn: document.querySelector('[data-modal-about-open]'),
    closeModalAboutBtn: document.querySelector('[data-modal-about-close]'),
      modalAbout: document.querySelector('[data-modal-about]'),
  };

  refs.openModalAboutBtn.addEventListener('click', toggleModal);
  refs.closeModalAboutBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalAbout.classList.toggle('is-hidden');
    }
})();

(() => {
  const refs = {
    openModalAboutBtn: document.querySelector('[data-modal-about-open]'),
    closeModalAboutBtn: document.querySelector('[data-modal-about-close]'),
    bodyHidden:  document.querySelector('[data-modal-body]')
  };

  refs.openModalAboutBtn.addEventListener('click', toggleBody);
  refs.closeModalAboutBtn.addEventListener('click', toggleBody);

      function toggleBody() {
    refs.bodyHidden.classList.toggle('is-hidden');
  }
})();