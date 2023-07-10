// passo 1 passar o mouse em cima do personagem,devemos selecionado
const personagens  = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        //mobile 
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: "smooth"});
        }

         const personagemSelecionado= document.querySelector('.selecionado');
         personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //passo2 - mudar a imagem
         const imagemPersonagemGrande = document.querySelector('.personagem-grande');       

         const idPersonagem = personagem.attributes.id.value;
         
         imagemPersonagemGrande.src = `./src/card-${idPersonagem}.png.jpg`;

         //passo3 - mudar o nome
         const nomePersonagem = document.getElementById('nome-personagem');
         nomePersonagem.innerText = personagem.getAttribute('data-name');

         //passo4 - mudar descrição
         const descricaoPersonagem = document.getElementById('descricao-personagem');
         descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})
