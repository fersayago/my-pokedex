# Getting Started with PokeAPI
La idea del proyecto es poder crear una pokedex para poder reforzar el uso de <b>hooks</b> como useState y useEffect de React.js y consumir una <b>api</b> desde el frontend permitiendo almacenar elementos en el <b>local storage</b>.

## Navbar, Searchbar y fetch API

1. Creamos la navbar con el logo y los favoritos
2. Creamos el searchbar con la barra de busqueda y su useState del pokemon a buscar al apretar el botón de busqueda
3. creamos un [componente Api](src/Api.js) que reciba el nombre de un pokemon y que haga el fetch a la api de manera asincrona dentro de un try catch
4. Recibimos los datos del pokemon y los mostramos en un div

## Grid y fetch pokemons

1. Comenzamos con la parte principal para mostrar tarjetas de varios pokemones y sus datos
2. Creamos un grid en el [componente Pokedex](src/Pokedex.js) para poder mostrar los pokemones en orden numerico.
3. Dentro de [App.js](App.js) creamos un useState para la carga inicial de pokemones
4. dentro del [componente Api](src/Api.js) creamos un nuevo fetch para poder traer varios pokemones y poder llenar el grid a futuro
5. En el nuevo fetch debemos indicar los valores de limite y offset de pokemones como lo indica la documentación de PokeAPI y configuramos valores por defecto para ambos parametros en caso de que no se reciban como propieda y para la primera carga.
6. Dentro de App.js se crea una función asincrona para poder traer a los pokemons que poblaran la pokedex desde el useEffect.
7. Luego de obtener el array de pokemons se lo pasamos como propiedad al componente Pokedex.js para que lo pueda renderizar en el grid.
8. Una vez que recibe los pokemones por props hacemos un map de los mismos para poder mostrarlos en el pokedex grid tal como aparecen en el llamado a la API.

## Cards como componente reutilizable

Retomar 1:08:21
https://www.youtube.com/watch?v=IFWvfZaKF_w