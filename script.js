// const - не изменяется
// let - динамическая переменная - изменяется

const menu = document.querySelector('.menu');
const btnOpen = document.querySelector('.header__btn')
const btnClose = document.querySelector('.menu__exit')

// пользователь нажимает на кнопку
btnOpen.addEventListener('click', () => {
    // добавляем класс для меню
    menu.classList.add('active')
})

btnClose.addEventListener('click', () => {
    menu.classList.remove('active')
})
