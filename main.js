// TAB NAVEGATION
const tabMenu = document.querySelectorAll('.jstabmenu');
const tabContent = document.querySelectorAll('.jstabcontent');

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
})

// MENU HAMBURGER 
const hamburger = document.querySelector(".menuhamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
); 
