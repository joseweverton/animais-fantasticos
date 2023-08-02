const initModal = () => {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    const abrirModal = (event) => {
      event.preventDefault();
      containerModal.classList.add("ativo");
    };

    const fecharModal = (event) => {
      event.preventDefault();
      containerModal.classList.remove("ativo");
    };

    const clickForaModal = (event) => {
      if (event.target === containerModal) fecharModal(event);
    };

    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", clickForaModal);
  }
};

export default initModal;
