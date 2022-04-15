import './normalize.css'
import './asset/fonts/fonts.css'
import './asset/pages/main/index.scss'

let bg = document.querySelector('.parallax__bg');
let line = document.querySelector('.parallax__line');
let ship = document.querySelector('.parallax__ship');
let isTransform = false;


const transform = (x,y)=>{
  bg.style.transform = `translate( -${x * 15}px, -${y * 10}px)`;

  if((isTransform === false)&&(window.innerHeight < 2000)) {
   ship.style.transform = `scale(.7) rotateX(40deg)`;
   line.style.transform = `translateY(-70px) skewY(-5deg)`;
   isTransform= true}
  }
  

const moveMouse= (e)=>{
let x = e.clientX / window.innerWidth;
let y = e.clientY / window.innerHeight;
transform(x,y)
}

const moveTouch=(e)=>{

 const x=e.changedTouches[0].pageX/window.innerWidth;
  const y=e.changedTouches[0].pageY/ window.innerHeight;
  transform(x,y)
}

window.addEventListener('touchmove', function (e) {
  moveTouch(e)
});
window.addEventListener('mousemove', function (e) {
  moveMouse(e);
});
