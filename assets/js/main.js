const offset=0
const limit=10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `<ol class="pokemons">
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>   

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
            alt="${pokemon.name}">
        </div>   
    </li>
    
</ol>`
}

const pokemonList = document.getElementById('pokemonsList')


fetch(url)
    .then((response) => response.json()) //O que vai ao segundo then é o retorno do primeiro
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
    })

    .catch((error) => console.error(error))

  