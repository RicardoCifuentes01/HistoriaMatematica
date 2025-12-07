function darkMode() {

    const heroImg = document.getElementById('heroImg')
    const body = document.body
    const DARK_IMG_PATH = './img/inicioOscuro.png'
    const LIGHT_IMG_PATH = './img/inicio.png'
    function setDark(on) { if (on) { body.classList.add('dark'); darkToggle.textContent = 'Modo claro'; darkToggle.setAttribute('aria-pressed', 'true'); heroImg.src = DARK_IMG_PATH; } else { body.classList.remove('dark'); darkToggle.textContent = 'Modo oscuro'; darkToggle.setAttribute('aria-pressed', 'false'); heroImg.src = LIGHT_IMG_PATH; } } darkToggle.addEventListener('click', () => { setDark(!body.classList.contains('dark')); })
}
darkMode()