/*
quando clicar no pokémon da Listagem tem que esconder o Cartao do pokémon ativo e mostrar o próximo cartao  que será selecionado / ativo 

Para isso necessita manipular DOIS elementos do document ( html) 
    1- listagem
    2- cartao do pokémon

precisa criar DUAS variavéis no JS para manipular os elementos  da tela

precisa usar um evento de CLIQUE para o usuário selecionar a listagem dos pokémons para :

    -remover a classe aberto somente do cartao que está aberto
    - ao clicar no pokémon da listagem, pegar o ID dele para saber qual cartao mostrar
    - remover a classe ativo que marca o pokémon selecionado
    - adicionar a classe ativo no item da listagem que foi selecionado

*/

// criando as DUAS varriávei no JS para manipular os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => { 
    // precisa usar um evento de CLIQUE para o usuário selecionar a listagem dos pokémons 
           
    pokemon.addEventListener('click', () => {
        // -remover a classe aberto somente do cartao que está aberto 
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
    
    // - ao clicar no pokémon da listagem, pegar o ID dele para saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto') 
       
        // - remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // - adicionar a classe ativo no item da listagem que foi selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
    
} )

