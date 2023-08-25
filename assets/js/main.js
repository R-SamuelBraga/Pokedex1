
function convertPokemonToHtml(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">${pokemon.types}</li>
                <li class="type">${pokemon.types}</li>
            </ol>
            <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"
            alt="${pokemon.name}">
        </div>
    </li>`        
}

const  pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons = []) => {
    // const listitems = []
    // for (let index = 0; index < pokemons.length; index++) {
        
    //     

    //     const pokemon = pokemons[index];
    //     console.log(pokemon)
    //     listitems.push(convertPokemonToHml(pokemon))
    //     // pokemonList.innerHTML += 

    // }
    pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
})
