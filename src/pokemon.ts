interface Pokemon {
   name : string

   level : number
   hp : number
   atk : number
   atk_sp : number
   def : number
   def_sp : number
   speed : number
}

const pkmn: Pokemon = {
   name: 'Pikachu',
   level: 5,
   hp: 20,
   atk: 12,
   atk_sp: 10,
   def: 8,
   def_sp: 7,
   speed: 14
}

console.log(pkmn.speed);
