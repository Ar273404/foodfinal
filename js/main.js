/* =========== Show Navbar =========== */
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

/* =========== Scroll Position =========== */

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

/* =========== Smooth Scroll =========== */
Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
    navbar.classList.remove("show");
  });
});

/* =========== Preloader =========== */
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

/* =========== Scroll Top =========== */
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});


// image slider
"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});



// // Get elements
// const loginBtn = document.getElementById('loginBtn');
// const loginForm = document.getElementById('loginForm');
// const closeBtn = document.getElementById('closeBtn');

// // Show login form
// loginBtn.addEventListener('click', () => {
//     loginForm.style.display = 'block';
// });

// // Close login form
// closeBtn.addEventListener('click', () => {
//     loginForm.style.display = 'none';
// });

// // Close login form when clicking outside the form
// window.addEventListener('click', (e) => {
//     if (e.target === loginForm) {
//         loginForm.style.display = 'none';
//     }
// });

// // Prevent form submission for demonstration purposes
// const loginFormElement = document.getElementById('loginForm');
// loginFormElement.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('Form submitted (for demonstration purposes only).');
// });


