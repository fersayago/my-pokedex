import React from 'react';
import Pokemon from './Pokemon';
import Pagination from './Pagination'

const Pokedex = (props) => {
  const pokemons = props.pokemons;

  return (
    <div>
      <div className='header'>
        <h1>Pokedex</h1>
        <Pagination
          onLeftClick={console.log("left")}
          onRightClick={console.log("right")}
          page={1}
          totalPages={11}
        />
      </div>
      <div className='pokedex-grid'>
        {
          pokemons.map((pokemon, index) =>{
            return <Pokemon pokemon={pokemon} key={pokemon.name} />
          })
        }
      </div>
    </div>
  )
}

export default Pokedex;