import React, {useState} from 'react';
import searchPokemon from './../Api'

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChangeFunction = (e) => {
    setSearch(e.target.value);
  }

  const onClickFunction = async (e) => {
    const data = await searchPokemon(search.toLowerCase())
    setPokemon(data);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder='buscar pokemon...'
          onChange={onChangeFunction}
        />
      </div>
      <div>
        <button
          onClick={onClickFunction}
        >
          Buscar
        </button>
      </div>
      <div>
        {pokemon &&
        <div>
          <div>Nombre: {pokemon.name}</div>
          <div>Peso: {pokemon.weight}</div>
        </div>
        }
      </div>
    </div>
  )
}

export default Searchbar;