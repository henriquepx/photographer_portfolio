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



// Menu Hamburger Responsible
const hamburger = document.querySelector(".hamburger");
const MenuHamburguer = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  MenuHamburguer.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    MenuHamburguer.classList.remove("active");
  })
); 
