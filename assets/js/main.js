// Menu Show Y Hidden

const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close');

// Menu show
// Validate if constant exists
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

// Range Slider
const rangeMenu = document.getElementById('range-menu');
const colorIcon = document.getElementById('change-color');
const closeIcon = document.getElementsByClassName('.uil-palette');

colorIcon.addEventListener('click', () => {
   rangeMenu.classList.add('show-range');
   colorIcon.classList.add('range__icon');
});

rangeMenu.addEventListener('click', () => {
   rangeMenu.classList.remove('show-range');
   colorIcon.classList.remove('range__icon');
});

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var mainColor = rootStyles.getPropertyValue('--hue-color');

// console.log(mainColor);

// document.documentElement.style.setProperty('--hue-color', 200);

const slideValue = document.querySelector('span');
const inputSlider = document.querySelector('input');
const selectedColor = localStorage.getItem(mainColor);

inputSlider.oninput = () => {
   let value = inputSlider.value;
   root.style.setProperty('--hue-color', value);
   slideValue.textContent = value;
   slideValue.style.left = value / 3.6 + '%';
   slideValue.classList.add('show');

   localStorage.setItem();
};

inputSlider.onblur = () => {
   slideValue.classList.remove('show');
};

// Remove menu mobile

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
   const navMenu = document.getElementById('nav-menu');
   //when we click on each nav__link, we remove  the show_menu class
   navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// Accordion skills

const skillsContent = document.getElementsByClassName('skills__content'),
   skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
   let itemClass = this.parentNode.className;

   for (i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills__content skills__close';
   }
   if (itemClass === 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open';
   }
}

skillsHeader.forEach((el) => {
   el.addEventListener('click', toggleSkills);
});

// ----------Qualification Tabs-----------------

const tabs = document.querySelectorAll('[data-target]'),
   tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
   tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
         tabContent.classList.remove('qualification__active');
      });
      target.classList.add('qualification__active');

      tabs.forEach((tab) => {
         tab.classList.remove('qualification__active');
      });

      tab.classList.add('qualification__active');
   });
});

// Services Model

const modelViews = document.querySelectorAll('.services__model'),
   modelBtns = document.querySelectorAll('.services__button'),
   modelCloses = document.querySelectorAll('.services__model-close');

let model = function (modelClick) {
   modelViews[modelClick].classList.add('active-model');
};

modelBtns.forEach((modelBtn, i) => {
   modelBtn.addEventListener('click', () => {
      model(i);
   });
});

modelCloses.forEach((modelClose) => {
   modelClose.addEventListener('click', () => {
      modelViews.forEach((modelView) => {
         modelView.classList.remove('active-model');
      });
   });
});

// Portfolio Swiper

var swiperPortfolio = new Swiper('.portfolio__container', {
   cssMode: true,
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   // mousewheel: true,
   // keyboard: true,
});

// Testimonial pagination
var swiperTestimonial = new Swiper('.testimonial__container', {
   loop: true,
   grabCursor: true,
   spaceBetween: 48,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },
   breakpoints: {
      568: {
         slidesPerView: 2,
      },
   },
   // mousewheel: true,
   // keyboard: true,
});

// Scroll Sections Active Link

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50,
         sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.add('active-link');
      } else {
         document
            .querySelector('.nav__menu a[href*=' + sectionId + ']')
            .classList.remove('active-link');
      }
   });
}
window.addEventListener('scroll', scrollActive);

// Change background Header

function scrollHeader() {
   const nav = document.getElementById('header');
   // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
   if (this.scrollY >= 80) nav.classList.add('scroll-header');
   else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// show scroll top

function scrollUp() {
   const scrollUp = document.getElementById('scroll-up');
   //when the scroll is higer than 560 viewport height, add <the></the> show-scroll class to the a tag with the scroll
   if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
   else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// Dark Light Theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
console.log(selectedTheme);
console.log(selectedIcon);

// We obtain the current theme that the interface has by validating the dar-theme the dark-theme class

const getCurrentTheme = () =>
   document.body.classList.contains(darkTheme) ? 'dark ' : 'light';
const getCurrentIcon = () =>
   themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

console.log(selectedTheme);
console.log(selectedIcon);

//we validate if the user previously chose a topic
if (selectedTheme) {
   //if the validation is fulfilled, we ask  what the issue  was to  know if we activated or deactivated the dark
   document.body.classList[selectedTheme === 'light' ? 'remove' : 'add'](
      darkTheme
   );

   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
      iconTheme
   );
}

//Active / Deactivate the theme manually with the button

themeButton.addEventListener('click', () => {
   //add or remove dark / icon theme
   document.body.classList.toggle(darkTheme);
   themeButton.classList.toggle(iconTheme);

   //we save the theme and the current icon that the user close

   localStorage.setItem('selected-theme', getCurrentTheme());

   localStorage.setItem('selected-icon', getCurrentIcon());
});
