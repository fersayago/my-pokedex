import React, {useState} from 'react';
import { searchPokemon}  from './../Api'

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
    <div className='searchbar-container'>
      <div className='searchbar'>
        <input
          type="text"
          placeholder='buscar pokemon...'
          onChange={onChangeFunction}
        />
      </div>
      <div className='searchbar-button'>
        <button
          onClick={onClickFunction}
        >
          Buscar
        </button>
      </div>
    </div>
  )
}

export default Searchbar;