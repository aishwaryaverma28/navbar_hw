//===========================================queryselectors to select html class======================================
let mobileNav = document.querySelector('.nav-list');
let hamburger = document.querySelector('.hamburger');
let bars = document.querySelectorAll('.hamburger span');
let isActive = false;
//==========================================================functions==================================================
function addClass(){
    if(window.innerWidth < 860){
        document.body.classList.add('mobile');
    }
    else{
        document.body.classList.remove('mobile');
    }
}
//need to execute this function when window is loaded
 window.onload = addClass
//==========================================================eventlisteners=================================================
//it will trigered whenever window's size is changed
window.addEventListener('resize', function(){
    addClass();
})
//hamburger icon event
hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open');
    if(isActive==false){
        bars[0].style.transform = 'rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg)';
        isActive = true;
    }
    else
    {
        bars[0].style.transform = 'rotate(0deg)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0deg)';
        isActive = false
    }
})