
const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const burgerBtnBars = document.querySelector('.burger-btn__bars');
const navItems = document.querySelectorAll('.nav__item');


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