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

const getPokemons = async (limit=20, offset=0) => {
  try {
    let fetchPokemonsURL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(fetchPokemonsURL)
    const data = await response.json()
    return data;
  } catch (error) {
    alert(`Se encontro el siguiente error:\n${error}`)
  }
}

const getPokemonData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    alert(`Se encontrol el siguiente error:\n${error}`)
  }
}

export {
  searchPokemon,
  getPokemons,
  getPokemonData
}