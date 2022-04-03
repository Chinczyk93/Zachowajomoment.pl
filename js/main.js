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

// let i = 0; 
//   let images = [];
//   const slideTime = 3000;
//   const header = document.querySelector('.header');
//   const image = document.querySelector('.slider');

//   images[0] = 'img/slider/slider1.webp'
//   images[1] = 'img/slider/slider2.webp'
//   images[2] = 'img/slider/slider3.webp'
//   images[3] = 'img/slider/slider4.webp'
//   images[4] = 'img/slider/slider5.webp'
//   images[5] = 'img/slider/slider6.webp'

//   const changePicture = () => {
//     // header.style.backgroundImage = "url(" + images[i] + ")";
//     image.src = images[i];
// i++;
// //     if(i < images.length -1) {
// //       i++;
// // }
// // else {
// //   i = 0; 
// // }
// if(i === images.length){
//   i = 0;
// }
// setTimeout(changePicture, slideTime);

//   }
// window.addEventListener('load', changePicture);

////////////////////////////////
let i = 0; 
  let images = [];
  const slideTime = 3000;
  const header = document.querySelector('.header');
  const image = document.querySelector('.slider');

  images[0] = 'img/portfolio/sesja-slubna/kamila-pawel/sesja-slubna-palac-w-rogalinie-460-307-00024.webp 460w, img/portfolio/sesja-slubna/kamila-pawel/sesja-slubna-palac-w-rogalinie-800-533-00024.webp 800w, img/portfolio/sesja-slubna/kamila-pawel/sesja-slubna-palac-w-rogalinie-1280-853-00024.webp 1280w, img/slider/slider1.webp 1920w'
  images[1] = 'img/portfolio/sesja-slubna/marcelina-piotr/sesja-slubna-o-zachodzie-slonca-460-307-00008.webp 460w, img/portfolio/sesja-slubna/marcelina-piotr/sesja-slubna-o-zachodzie-slonca-800-533-00008.webp 800w, img/portfolio/sesja-slubna/marcelina-piotr/sesja-slubna-o-zachodzie-slonca-1280-853-00008.webp 1280w, img/slider/slider2.webp 1920w'
  images[2] = 'img/portfolio/sesja-w-parze/zosia-krzysztof/sesja-w-parze-spacer-cytadela-zosia-krzysztof-460-307-00009.webp 460w, img/portfolio/sesja-w-parze/zosia-krzysztof/sesja-w-parze-spacer-cytadela-zosia-krzysztof-800-533-00009.webp 800w, img/portfolio/sesja-w-parze/zosia-krzysztof/sesja-w-parze-spacer-cytadela-zosia-krzysztof-1280-853-00009.webp 1280w, img/slider/slider3.webp 1920w'
  images[3] = 'img/portfolio/sesja-okolicznosciowa/sesja-swiateczna-w-poznaniu/sesja-okolicznosciowa-swiateczna-w-poznaniu-460-307-00002.webp 460w, img/portfolio/sesja-okolicznosciowa/sesja-swiateczna-w-poznaniu/sesja-okolicznosciowa-swiateczna-w-poznaniu-1280-853-00002.webp 800w, img/portfolio/sesja-okolicznosciowa/sesja-swiateczna-w-poznaniu/sesja-okolicznosciowa-swiateczna-w-poznaniu-1280-853-00002.webp 1280w, img/slider/slider44.webp 1920w'
  images[4] = 'img/portfolio/sesja-brzuszkowa/sesja-brzuszkowa-460-307-00004.webp 460w, img/portfolio/sesja-brzuszkowa/sesja-brzuszkowa-800-533-00004.webp 800w, img/portfolio/sesja-brzuszkowa/sesja-brzuszkowa-1280-853-00004.webp 1280w, img/slider/slider55.webp 1920w'
  images[5] = 'img/portfolio/sesja-wizerunkowa/sesja-wizerunkowa-460-307-00006.webp 460w, img/portfolio/sesja-wizerunkowa/sesja-wizerunkowa-800-533-00006.webp 800w, img/portfolio/sesja-wizerunkowa/sesja-wizerunkowa-1280-853-00006.webp 1280w, img/slider/slider66.webp 1920w'

  const changePicture = () => {
    // header.style.backgroundImage = "url(" + images[i] + ")";
    image.srcset = images[i];
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
//////////////////////////////////////////



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