function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHtml(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${convertPokemonTypesToLi(pokemon.types).join('')}
            </ol>
            <img
            src="${pokemon.sprites.other.dream_world.front_default}"
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
