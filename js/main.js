// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginBlock = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
const loginSignin = document.querySelector('.login-signin');

const listUsers = [
  {
    id: '01',
    email: 'mr.akomarov@gmail.com',
    password: '12345678',
    displayName: 'Andrei' 
  },
  {
    id: '02',
    email: 'mr.akomarov@yandex.ru',
    password: '87654321',
    displayName: 'Kamarou'  
  }
];