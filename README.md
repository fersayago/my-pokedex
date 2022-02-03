# Getting Started with PokeAPI
La idea del proyecto es poder crear una pokedex para poder reforzar el uso de <b>hooks</b> como useState y useEffect de React.js y consumir una <b>api</b> desde el frontend permitiendo almacenar elementos en el <b>local storage</b>.

## Navbar, Searchbar y fetch API

1. Creamos la navbar con el logo y los favoritos
2. Creamos el searchbar con la barra de busqueda y su useState del pokemon a buscar al apretar el botón de busqueda
3. creamos un [componente Api](src/Api.js) que reciba el nombre de un pokemon y que haga el fetch a la api de manera asincrona dentro de un try catch
4. Recibimos los datos del pokemon y los mostramos en un div

## Cards y paginación

1. Comenzamos con la parte principal para mostrar tarjetas de varios pokemones y sus datos
2. Creamos un grid en el [componente Pokedex](src/Pokedex.js) para poder mostrar los pokemones en orden numerico.
3. Dentro de [App.js](App.js) creamos un useState para la carga inicial de pokemones
4. dentro del [componente Api](src/Api.js) creamos un nuevo fetch para poder traer varios pokemones y poder llenar el grid a futuro