import './normalize.css'
import './asset/fonts/fonts.css'
import './asset/pages/main/index.scss'

let bg = document.querySelector('.parallax__bg');
let line = document.querySelector('.parallax__line');
let ship = document.querySelector('.parallax__ship');
let isTransform = false;

const movieCursor= (e)=>{
   let x = e.clientX / window.innerWidth;
let y = e.clientY / window.innerHeight;

bg.style.transform = `translate( -${x * 15}px, -${y * 10}px)`;

if(isTransform === false) {
 ship.style.transform = `scale(.7) rotateX(40deg)`;
 line.style.transform = `translateY(-70px) skewY(-5deg)`;
 isTransform= true}
}
window.addEventListener('touchmove', function (e) {
  movieCursor(e)
});
window.addEventListener('mousemove', function (e) {
  movieCursor(e)
});
