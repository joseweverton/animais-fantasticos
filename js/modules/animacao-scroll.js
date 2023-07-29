const initAnimacaoScroll = () => {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = innerHeight * 0.6;
    const animaScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    };
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
};
export default initAnimacaoScroll;
