import React from 'react';

const Navbar = () => {
  let imgURL = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  return (
    <nav>
      <div>
        <img 
          src={imgURL}
          alt="PokeAPI Logo"
          className='navbar-image'
        />
      </div>
      <div>❤️</div>
    </nav>
  )
}

export default Navbar;