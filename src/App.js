import React, { useState, useEffect} from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemons } from './Api'

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results);
    } catch (error) {
      alert(`Se encontro el siguiente error:\n${error}`)
    }
  }

  useEffect(() => {
    console.log('Inside useEffect')
    fetchPokemons();

  }, [])

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <Pokedex pokemons={pokemons}/>
      </div>
    </div>
  );
}

export default App;
