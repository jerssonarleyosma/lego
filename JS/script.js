const modal = document.querySelector('.modal')
const button1 = document.querySelector('#button1')
const closeboton = document.querySelector('.modal__container--close')

button1.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
} )

closeboton.addEventListener('click', () => {
    console.log('preuba')
    modal.classList.remove('visible')
    modal.classList.add('hidden')
} )
