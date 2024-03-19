/* querySelectorAll = seleciona todos oes elementos que possuirem a mesma class ou id especificada */
const personagens = document.querySelectorAll('.personagem')



personagens.forEach((personagem) => {
    /* addEventListerner = Fica ouvindo por eventos no objeto especificado, nesse caso o objeto sera o personagem */
    personagem.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });

        }
        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado');
        alterarImagemPersonagemSelecionado(personagem);
        alterarDescricaoPersonagem(personagem);
        alterarNomePersonagemSelecionado(personagem);
    })
})






function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText= personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const alterarImagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    alterarImagemPersonagemGrande.src = `./assets/images/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const alterarImagemPersonagemSelecionado = document.querySelector('.selecionado');
    alterarImagemPersonagemSelecionado.classList.remove('selecionado');
}