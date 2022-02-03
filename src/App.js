import React, { useState, useEffect} from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex'

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log('Inside useEffect')
  }, [])

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
