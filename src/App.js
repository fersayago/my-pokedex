import React, { useState, useEffect } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons } from "./Api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      // promise para array de promesas
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      alert(`Se encontro el siguiente error:\n${error}`);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // TODO: PAGINADO 1:46:00

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        {loading ? (
          <div> Cargando pokemones...</div>
        ) : (
          <Pokedex pokemons={pokemons} />
        )}
      </div>
    </div>
  );
}

export default App;
