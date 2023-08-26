const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
// const pokemonGeneration = document.getElementById(`gen${}`)

// switch (pokemonGeneration) {
//     case 'gen1':
        
//         break;

//     default:
//         break;
// }
const maxRecords = 151
const limit = 10
let offset = 0

function loadMorePokemons(offset, limit){
    pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        // const listitems = []
        // for (let index = 0; index < pokemons.length; index++) {
            
        //     
    
        //     const pokemon = pokemons[index];
        //     console.log(pokemon)
        //     listitems.push(convertPokemonToHml(pokemon))
        //     // pokemonList.innerHTML += 
    
        // }
        const newhtml = pokemons.map( (pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img
                    src="${pokemon.image}"
                    alt="${pokemon.name}">
                </div>
            </li>`).join('')
        pokemonList.innerHTML += newhtml
    })
}
loadMorePokemons(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage  = offset + limit

    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadMorePokemons(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else{
        loadMorePokemons(offset, limit) 
    }    
       
})
