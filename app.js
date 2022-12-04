//queryselectors to select html class
let mobileNav = document.querySelector('.nav-list');
let hamburger = document.querySelector('.hamburger');
let bars = document.querySelectorAll('.hamburger span');
let isActive = false;
//eventlisteners
//hamburger icon event
hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
    bars[0].style.transform = 'rotate(45deg)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg)';
})