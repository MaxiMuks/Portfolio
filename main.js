
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
            });
        }
    });


    // 상단 메뉴바 고정
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);



}

// 새로고침 gif
const loader = document.querySelector('.loader-container');

window.addEventListener('load', () => {
    loader.style.display = 'none';
});

// ScrollReveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .about-Title', {origin: 'top'});
ScrollReveal().reveal('.home-img, .about-contents, .skills-column, .project-box', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-contents h3', {origin: 'right'});