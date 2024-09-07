const toggleMenu = document.getElementById('toggle-menu')
const cancel = document.getElementById('cancel')
const navList = document.getElementById('nav-list')

toggleMenu.addEventListener('click',()=>{
    navList.classList.toggle('active')
    cancel.classList.toggle('active')
})

cancel.addEventListener('click',()=>{
    navList.classList.toggle('active')
    cancel.classList.toggle('active') €
})