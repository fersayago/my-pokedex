const searchPokemon = async (pokemon) => {
  try {
    let fetchPokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(fetchPokemonURL)
    const data = await response.json()
    return data;
  } catch (error) {
    alert(`Se encontro el siguiente error:\n${error}`)
  }
}

const getPokemons = async () => {
  try {
    let fetchPokemonURL = `https://pokeapi.co/api/v2/pokemon/pokemon?limit=100&offset=200`
    const response = await fetch(fetchPokemonURL)
    const data = await response.json()
    return data;
  } catch (error) {
    alert(`Se encontro el siguiente error:\n${error}`)
  }
}

export default {searchPokemon, getPokemons};