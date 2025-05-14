const getPokemonId = (id) => {
  const url =  `https://pokeapi.co/api/v2/pokemon/1${id}`;
  return fetch (url)
  .then((rep) => rep.json ())
  .then((pokemon) => pokemon.name);

}

module.exports = getPokemonId;
