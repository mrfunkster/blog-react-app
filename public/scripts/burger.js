let burgerBtn = document.querySelector('.mobile-menu');
let navMenu   = document.querySelector('.nav-menu');
let overlay   = document.querySelector('.overlay');
let topMenu   = document.querySelector('.top-menu')

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    if (burgerBtn.classList.contains('active')) {
        navMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.classList.add('lock');
    } else {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('lock');
    }
})

function closeBurger() {
    navMenu.classList.remove('active');
    burgerBtn.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
}

overlay.addEventListener('click', function(e) {
    if (e.target = overlay) {
        closeBurger();
    }
})

topMenu.addEventListener('click', function(e) {
    if (e.target != topMenu) {
        closeBurger();
    }
})
