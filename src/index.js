import './normalize.css'
import './asset/fonts/fonts.css'
import './asset/pages/main/index.scss'

let bg = document.querySelector('.parallax__bg');
let line = document.querySelector('.ship__broken-line');
let ship = document.querySelector('.ship');
const startButton = document.getElementById('start')
const burgerButton = document.getElementById('close-burger');
const nav = document.querySelector('.header__nav');
const navList = document.querySelector('.header__list')
const burgerOverlay = document.querySelector('.header__overlay')

let isTransform = false;
let isOpen = false;


function openBurger(e) {
  e.preventDefault();
  isOpen = true;
  burgerButton.classList.add('header__burger-button_toClose');
  nav.classList.add('header__nav_burger')
  navList.classList.add('header__list_burger')
  burgerOverlay.classList.add('header__overlay_visible')
}
function closeBurger(e) {
  isOpen = false;
  navList.classList.add('closing');
  e.target.disabled = true;

  setTimeout(() => {
    burgerButton.classList.remove('header__burger-button_toClose');
    nav.classList.remove('header__nav_burger')
    navList.classList.remove('header__list_burger')
    burgerOverlay.classList.remove('header__overlay_visible')
    navList.classList.remove('closing');
    e.target.disabled = false;
  }, 800);
}

function toogleBurger(e) {
  e.preventDefault();
  !isOpen ? openBurger(e) : closeBurger(e);
}

burgerButton.addEventListener('click', (e) => toogleBurger(e));

const transform = (x, y) => {
  bg.style.transform = `translate( -${x * 15}px, -${y * 10}px)`;
}

const startSpace = (e) => {
  e.preventDefault()
  if ((isTransform === false) && (window.innerHeight < 2000) && (window.innerWidth > 800)) {
    ship.style.transform = `translateY(-25px) rotateX(40deg)`;
    line.style.opacity = `0`;
    ship.classList.add('ship_whithout-line')
    isTransform = true;
  }
}

startButton.addEventListener('click', (e) => startSpace(e))
const moveMouse = (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  transform(x, y)
}

const moveTouch = (e) => {
  const x = e.changedTouches[0].pageX / window.innerWidth;
  const y = e.changedTouches[0].pageY / window.innerHeight;
  transform(x, y)
}

window.addEventListener('touchmove', function (e) {
  moveTouch(e)
});
window.addEventListener('mousemove', function (e) {
  moveMouse(e);
});
