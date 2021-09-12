// var navMain = document.querySelector('.main-nav');
// var navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });

const navMain = document.querySelector(".main-nav__wrapper");
const navToggle = document.querySelector(".main-nav__toggle");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav__wrapper--closed")) {
    navMain.classList.remove("main-nav__wrapper--closed");
    navToggle.classList.add("main-nav--open");
  } else {
    navMain.classList.add("main-nav__wrapper--closed");
    navToggle.classList.remove("main-nav--open");
  }
});
