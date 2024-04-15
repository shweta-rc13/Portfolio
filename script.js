// let menuList = document.getElementById(navbar);
// navbar.style.maxHeight = "0px"


// function toggleNavbar() {
//     var navbarLinks = document.querySelectorAll('.navbar a');
//     var menuIcon = document.getElementById('menuIcon');
//     var closeIcon = document.getElementById('closeIcon');

//     navbarLinks.forEach(function(link) {
//         link.style.display === 'none' ? link.style.display = 'block' : link.style.display = 'none';
//     });

//     menuIcon.style.display === 'none' ? menuIcon.style.display = 'block' : menuIcon.style.display = 'none';
//     closeIcon.style.display === 'none' ? closeIcon.style.display = 'block' : closeIcon.style.display = 'none';
// }

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");

// });
// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }))

// document.addEventListener('DOMContentLoaded', function () {
//   const menuIcon = document.getElementById('menu-icon');
//   const closeIcon = document.getElementById('close-icon');
//   const navbar = document.getElementById('navbar');

//   menuIcon.addEventListener('click', function () {
//       navbar.classList.add('active');
//       menuIcon.style.display = 'none';
//       closeIcon.style.display = 'block';
//   });

//   closeIcon.addEventListener('click', function () {
//       navbar.classList.remove('active');
//       closeIcon.style.display = 'none';
//       menuIcon.style.display = 'block';
//   });

//   const navLinks = document.querySelectorAll('.navbar a');
//   navLinks.forEach(link => {
//       link.addEventListener('click', function (e) {
//           e.preventDefault();
//           const targetId = this.getAttribute('href');
//           const targetSection = document.querySelector(targetId);
//           if (targetSection) {
//               targetSection.scrollIntoView({ behavior: 'smooth' });
//               navbar.classList.remove('active');
//               closeIcon.style.display = 'none';
//               menuIcon.style.display = 'block';
//           }
//       });
//   });
// });
