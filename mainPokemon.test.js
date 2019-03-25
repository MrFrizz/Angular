const pokemonAPI = require('./built/pokemon.js');

let pikachu = new pokemonAPI.Pokemon("Pikachu", 14, 10, 11, 15, 16, 22);
let untrucnul = new pokemonAPI.Pokemon("untrucnul", 1, 5, 3, 4, 5, 2);
let move = new pokemonAPI.Power(50, pokemonAPI.Type.Fire);

it("See which Pokemon is the faster", () => {
  expect(pokemonAPI.firstAttacker(pikachu, untrucnul)).toBe(untrucnul);
});

it("See how much damage the move deals", () => {
  expect(pokemonAPI.damageOfAnAttack(move, pikachu, untrucnul)).toBe(54);
});

/*test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});*/
