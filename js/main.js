//! Menu Show
const ShowMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
ShowMenu('nav-toggle', 'nav-menu')

// ! Active And Remove Menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    // ? Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // ? Mobile remove menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//! Scroll Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// Home
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social', { interval: 200 })

// About
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 200 })

// Skill
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', { delay: 200 })
sr.reveal('.skills__data', { interval: 200 })
sr.reveal('.skills__img', { delay: 200 })

// Project
sr.reveal('.project__img', { interval: 200 })

// Contact
sr.reveal('.contact__input', { interval: 200 })