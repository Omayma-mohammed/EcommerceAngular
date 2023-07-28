const menu = document.querySelector('#mobile__menu');
const menuLinks = document.querySelector('.navbar__menu');
const bar = document.getElementsByTagName('span');

menu.addEventListener('click',function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  bar.style.backgroundColor = '#f77062';
})