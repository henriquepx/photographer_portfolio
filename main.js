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

// TEXT WRITING

const greeting = ['Photographer', 'Filmmaker'];
let currentGreetingIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;
let isPaused = false;
let pauseEnd = 0;

function typeWriterEffect() {
  const greetingElement = document.getElementById('typing');

  if (isPaused && Date.now() > pauseEnd) {
    isPaused = false;
    if (isDeleting) {
      currentGreetingIndex = (currentGreetingIndex + 1) % greeting.length;
      isDeleting = false;
    } else {
      isDeleting = true;
    }
  }

  if (!isPaused && !isDeleting && currentCharacterIndex === greeting[currentGreetingIndex].length) {
    isPaused = true;
    pauseEnd = Date.now() + 800; 
    return setTimeout(typeWriterEffect, 40);
  }

  if (!isPaused && isDeleting && currentCharacterIndex === 0) {
    isPaused = true;
    pauseEnd = Date.now() + 200; 
    return setTimeout(typeWriterEffect, 40);
  }

  const timeout = isDeleting ? 100 : 200;
  greetingElement.innerText = greeting[currentGreetingIndex].substring(0, currentCharacterIndex);
  currentCharacterIndex = isDeleting ? currentCharacterIndex - 1 : currentCharacterIndex + 1;
  setTimeout(typeWriterEffect, timeout);
}

typeWriterEffect();