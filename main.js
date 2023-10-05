$('.image-container').hover(function() {
  $('.image-container').toggleClass('shadow');
  $(this).toggleClass('active shadow');
});

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