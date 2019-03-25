var pokemonAPI = require("./built/pokemon.js");

let pikachu = new pokemonAPI.Pokemon("Pikachu", 5, 0, 0, 7, 0, 6, 0, 15, 65, new pokemonAPI.Power("Fatal foudre", 30, pokemonAPI.Type.Thunder));
let untrucnul = new pokemonAPI.Pokemon("untrucnul", 3, 0, 0, 2, 0, 4, 0, 2, 40, new pokemonAPI.Power("Machin", 5, pokemonAPI.Type.Fire));



pokemonAPI.battleBetweenTwoPokemon(pikachu, untrucnul);
