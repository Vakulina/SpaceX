import './normalize.css'
import './asset/fonts/fonts.css'
import './asset/pages/main/index.scss'

let bg = document.querySelector('.mouse-parallax__bg');
let line = document.querySelector('.mouse-parallax__line');
let ship = document.querySelector('.mouse-parallax__ship');
let isTransform = false;

const movieCursor= (e)=>{
   let x = e.clientX / window.innerWidth;
let y = e.clientY / window.innerHeight;
let h = Math.max(y, x)
const g = (h) => {
  if (h > 0.3) {
   return 1 - h
  } else { return h, g(h) }
}


bg.style.transform = `translate( ${x * 15}px, ${y * 10}px)`;
if(isTransform === false) {
 console.log('change')
 ship.style.transform = `scale(.7) rotateX(40deg)`;
 line.style.transform = `translateY(-30px)`;
 isTransform= true}
}
window.addEventListener('touchmove', function (e) {
  movieCursor(e)
});
window.addEventListener('mousemove', function (e) {
  
  movieCursor(e)
});
