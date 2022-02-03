import React from 'react';
const {useState} = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const onChangeFunction = (e) => {
    setSearch(e.target.value);
  }

  const onClickFunction = () => {
    alert('boton apreta3')
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
    </div>
  )
}

export default Searchbar;