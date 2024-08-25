const navbarCenter = document.querySelector('.navbar-center');
document.querySelector('.menu').onclick = () => {
    navbarCenter.classList.toggle('active');
}

const menu = document.querySelector('.menu')
document.addEventListener('click',(e) => {
    if(!menu.contains(e.target) && !navbarCenter.contains(e.target)){
        navbarCenter.classList.remove('active');
    }
})