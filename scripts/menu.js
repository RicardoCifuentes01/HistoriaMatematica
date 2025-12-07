function menu() {
    const menuBtn = document.getElementById('menuBtn')
    const nav = document.getElementById('primary-nav')
    menuBtn.addEventListener('click', () => {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true'; menuBtn.setAttribute('aria-expanded', String(!expanded))
        nav.classList.toggle('show');
    })
    document.querySelectorAll('.nav-link').forEach(l => {
        l.addEventListener('click', e => {
            //e.preventDefault(); const id = l.getAttribute('href').slice(1);
            //document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' }); if (window.innerWidth <= 720) { nav.classList.remove('show'); menuBtn.setAttribute('aria-expanded', 'false'); }
        })
    })
    const darkToggle = document.getElementById('darkToggle')
}

menu()