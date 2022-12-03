import '../css/style.css'

/*Selecionar os elementos no dom*/
const inputPesquisa = document.querySelector("#inputPesquisa")
const btnLocalizar = document.querySelector("btnlocalizar")
const pokedexDisplay = document.querySelector("Display")

/*Adicionando evento */
btnLocalizar.addEventListener('click', function(){
    const dadosPokemon = await localizarPokemon(inputPesquisa,value)
    criarCartao(dadosPokemon)

    /*buscar os dados do pokemon no api */
    
})
async function localizarPokemon(termoBusca){
const url =`https://pokeapi.co/api/v2/pokemon/${termoBusca}`
const response = await fetch(url)
const pokemon = await response.json()
return pokemon 
}
function criarCartao(pokemon){
    const cartaoPokemon = document.createElement('div')
    cartaoPokemon.className ='cartaoPokemon'
    cartaoPokemon.innerHTML=`
    <img class="pokemonSprite" src="${pokemon.sprite.front_default}"/>
    <h2>${pokemon.name} </h2>
    `
    pokedexDisplay.appendChild(cartaoPokemon)
}
