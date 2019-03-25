"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(name, lvl, xpCurrent, xpNeedToLvlUp, atk, atk_sp, def, def_sp, speed, hp, move1) {
        this.name = name;
        this.lvl = lvl;
        this.xpCurrent = xpCurrent;
        this.xpNeedToLvlUp = xpNeedToLvlUp;
        this.atk = atk;
        this.atk_sp = atk_sp;
        this.def = def;
        this.def_sp = def_sp;
        this.speed = speed;
        this.hp = hp;
        this.move1 = move1;
        this.hpRemaining = this.hp;
        this.isFirstAttacker = false;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
;
var Power = /** @class */ (function () {
    function Power(powerName, powerStat, powerType) {
        this.powerName = powerName;
        this.powerStat = powerStat;
        this.powerType = powerType;
    }
    return Power;
}());
exports.Power = Power;
var Type;
(function (Type) {
    Type[Type["Fire"] = 0] = "Fire";
    Type[Type["Air"] = 1] = "Air";
    Type[Type["Water"] = 2] = "Water";
    Type[Type["Thunder"] = 3] = "Thunder";
})(Type = exports.Type || (exports.Type = {}));
function battleBetweenTwoPokemon(p1, p2) {
    console.log("Debug du combat entre " + p1.name + " et " + p2.name);
    console.log("Le pokemon qui va attaquer le premier sera " + firstAttacker(p1, p2).name + "\n");
    console.log(p1.name + " hp = " + p1.hpRemaining);
    console.log(p2.name + " hp = " + p2.hpRemaining + "\n");
    while (p1.hpRemaining !== 0 && p2.hpRemaining !== 0) {
        if (p1.isFirstAttacker) {
            var damages = damageOfAnAttack(p1.move1, p1, p2);
            console.log(p1.name + " lance l'attaque " + p1.move1.powerName + " !\nElle inflige " + damages + " point de dégat.");
            p1.isFirstAttacker = false;
            p2.isFirstAttacker = true;
        }
        else {
            var damages = damageOfAnAttack(p2.move1, p2, p1);
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
    }
    else {
        console.log(p1.name + " remporte le match !");
    }
}
exports.battleBetweenTwoPokemon = battleBetweenTwoPokemon;
function firstAttacker(p1, p2) {
    if (p1.speed > p2.speed) {
        p1.isFirstAttacker = true;
        return p1;
    }
    p2.isFirstAttacker = true;
    return p2;
}
exports.firstAttacker = firstAttacker;
function damageOfAnAttack(move, attacker, defender) {
    var damages = Math.floor(Math.floor(Math.floor(2 * attacker.lvl / 5 + 2) * attacker.atk * move.powerStat / defender.def) / 50) + 2;
    defender.hpRemaining = defender.hpRemaining - damages;
    if (defender.hpRemaining < 0) {
        defender.hpRemaining = 0;
    }
    return damages;
}
exports.damageOfAnAttack = damageOfAnAttack;
