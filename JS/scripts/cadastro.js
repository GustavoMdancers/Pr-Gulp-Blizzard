const btnOpenModalCadastro = document.querySelector('.js-modal-cadastro');
const btnCloseModalCadastro = document.querySelector('.js-close');

btnOpenModalCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement
    html.classList.add('show-modal')
})

btnCloseModalCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement
    html.classList.remove('show-modal')
})