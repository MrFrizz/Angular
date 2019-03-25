export class Pokemon {

   constructor(
     public name : string,
     public lvl : number,
     public xpCurrent : number,
     public xpNeedToLvlUp : number,
     public atk : number,
     public atk_sp : number,
     public def : number,
     public def_sp : number,
     public speed : number,
     public hp : number,
     public move1 : Power
   ) {}

   public hpRemaining : number = this.hp;

   public isFirstAttacker : boolean = false;
};

export class Power {

  constructor(
    public powerName : string,
    public powerStat : number,
    public powerType : Type
  ) {}
}

export enum Type {
  Fire,
  Air,
  Water,
  Thunder
}

export function battleBetweenTwoPokemon(p1 : Pokemon , p2 : Pokemon) {

  console.log("Debug du combat entre " + p1.name + " et " + p2.name);
  console.log("Le pokemon qui va attaquer le premier sera " + firstAttacker(p1, p2).name + "\n");

  console.log(p1.name + " hp = " + p1.hpRemaining);
  console.log(p2.name + " hp = " + p2.hpRemaining + "\n");

  while (p1.hpRemaining !== 0 && p2.hpRemaining !== 0) {
    if (p1.isFirstAttacker) {
      let damages = damageOfAnAttack(p1.move1, p1, p2);
      console.log(p1.name + " lance l'attaque " + p1.move1.powerName + " !\nElle inflige " + damages + " point de dégat.");
      p1.isFirstAttacker = false;
      p2.isFirstAttacker = true;
    } else {
      let damages = damageOfAnAttack(p2.move1, p2, p1);
      console.log(p2.name + " lance l'attaque " + p2.move1.powerName + " !\nElle inflige " + damages + " point de dégat.");
      damageOfAnAttack(p2.move1, p2, p1);
      p1.isFirstAttacker = true;
      p2.isFirstAttacker = false;
    }

    console.log(p1.name + " hp = " + p1.hpRemaining);
    console.log(p2.name + " hp = " + p2.hpRemaining + "\n");
  }

  if (p1.hpRemaining === 0) {
    console.log(p2.name + " remporte le match !");
  } else {
    console.log(p1.name + " remporte le match !");
  }
}

export function firstAttacker(p1 : Pokemon , p2 : Pokemon) {
  if (p1.speed > p2.speed) {
    p1.isFirstAttacker = true;
    return p1;
  }
  p2.isFirstAttacker = true;
  return p2;
}

export function damageOfAnAttack(move : Power, attacker : Pokemon, defender : Pokemon) {

  let damages = Math.floor(Math.floor(Math.floor(2 * attacker.lvl / 5 + 2) * attacker.atk * move.powerStat / defender.def) / 50) + 2;
  defender.hpRemaining = defender.hpRemaining - damages;
  if (defender.hpRemaining < 0) {
    defender.hpRemaining = 0;
  }
  return damages;
}
