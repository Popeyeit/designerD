const btnBurger = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');

const closeBurger = e => {
  navList.classList.remove('open');
  navList.removeEventListener('click', closeBurger);
};

const openBurger = e => {
  navList.classList.add('open');
  navList.addEventListener('click', closeBurger);
};

btnBurger.addEventListener('click', openBurger);
