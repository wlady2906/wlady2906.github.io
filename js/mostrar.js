const menubtn = document.querySelector('#menuopen');
const sidebar = document.querySelector('.sidebar');

const menuclose = document.querySelector('#menuclose');
const userdrop = document.querySelector('#user-drop');

menubtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

menuclose.addEventListener('click', () => {
    sidebar.classList.remove('active');
})

userdrop.addEventListener('click', () =>{
    userdrop.classList.toggle('active');
})

