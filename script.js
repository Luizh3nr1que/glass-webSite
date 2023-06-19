const menuIcon = document.querySelector('.icon');
const navConteudo = document.querySelector('.navMobile');

menuIcon.addEventListener('click', () => {
    if (navConteudo.style.display === 'none') {
        navConteudo.classList.remove('fecharNav');
        navConteudo.classList.add('abrirNav');
        navConteudo.style.display = 'block';
    } else {
        navConteudo.classList.remove('abrirNav');
        navConteudo.classList.add('fecharNav');
        setTimeout(() => {
            navConteudo.style.display = 'none';
        }, 300);
    }
});



window.addEventListener("load", function () {
    const loader = document.querySelector('.fundoLoad')
    loader.style.display = "none";
});