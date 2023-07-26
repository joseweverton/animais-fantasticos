const initTabNav = () => {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    const activeTab = (index) => {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
};

const initAccordion = () => {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    const activeAccordion = (event) => {
      event.currentTarget.classList.toggle(activeClass);
      event.currentTarget.nextElementSibling.classList.toggle(activeClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
};

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

initTabNav();
initAccordion();
initScrollSuave();
