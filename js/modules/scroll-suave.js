const initScrollSuave = () => {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /*Forma alternativa scroll suave   
      const topo = section.offsetTop
      window.scrollTo({
        top: topo,
        behavior: "smooth"
      })*/
  };

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
};
export default initScrollSuave;
