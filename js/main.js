const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const burgerBtnBars = document.querySelector('.burger-btn__bars');
const navItems = document.querySelectorAll('.nav__item');
const navDesktop = document.querySelector('.nav--desktop');
const navItemDesktop = document.querySelectorAll('.nav__item--desktop');
const logo = document.querySelector(".logo__img")
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
  nav.classList.toggle('nav--active')
  burgerBtnBars.classList.toggle('burger-btn__bars--active')
  navItemsAnimations()
}

burgerBtn.addEventListener('click',handleNav);

const navItemsAnimations = () => {
  let delayTime = 0;

  navItems.forEach(item => {
    item.classList.toggle('nav-items-animation')
    item.style.animationDelay = '.' + delayTime + 's';
    delayTime++;
  })
}

// slider header

let i = 0; 
  let images = [];
  const slideTime = 10000;
  const header = document.querySelector('.header');
  const image = document.querySelector('.slider');

  images[0] = 'img/slider/slider1.jpg'
  images[1] = 'img/slider/slider2.jpg'
  images[2] = 'img/slider/slider3.jpg'
  images[3] = 'img/slider/slider4.jpg'
  images[4] = 'img/slider/slider5.jpg'
  images[5] = 'img/slider/slider6.jpg'

  const changePicture = () => {
    // header.style.backgroundImage = "url(" + images[i] + ")";
    image.src = images[i];
i++;
//     if(i < images.length -1) {
//       i++;
// }
// else {
//   i = 0; 
// }
if(i === images.length){
  i = 0;
}
setTimeout(changePicture, slideTime);

  }
window.addEventListener('load', changePicture);





//biały pasek 
const whiteStrap = () => {
  const currentSection = window.scrollY;
  
  if(currentSection >= 100){
navDesktop.style.backgroundColor = "white";
logo.src = "img/Logo/zachowajmoment-mieta.png";
logo.style.top = " -26px";
changeColorMain();
  }
  else{
    navDesktop.style.backgroundColor = "transparent";
    logo.src = "img/Logo/logo_beztla.png";
    logo.style.top = " -20px";
    changeColorWhite();
  }
  }

  const changeColorMain = () => {
    navItemDesktop.forEach(item => {
        item.style.color = `#b2cfcb`;
      })
    }

const changeColorWhite = () => {
  navItemDesktop.forEach(item => {
      item.style.color = `white`;
    })
  }

window.addEventListener('scroll', whiteStrap);

const handleObserver = () => {
  const currentSection = window.scrollY;
  allSections.forEach(section => {
  
    if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
      burgerBtnBars.classList.add('black-bars-color')
    } else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
      burgerBtnBars.classList.remove('black-bars-color')
    }
  })
  }

  function handleCurrentYear() {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
  }
  handleCurrentYear();

  window.addEventListener('scroll', handleObserver);