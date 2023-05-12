import Hero from './src/Hero';
import HeroSword from './src/HeroSword';
import HeroAxe from './src/HeroAxe';
import HeroSpear from './src/HeroSpear';
import Weapon from './src/Weapon';


//fonction de resolution du combat 
function combat(hero1: Hero, hero2: Hero): void {

    do {
        hero1.attack(hero2);
        hero2.attack(hero1);
        if (!hero1.isAlive() && !hero2.isAlive()) {
            console.log("It's a draw");
        } else if (!hero1.isAlive() && hero2.isAlive()) {
            console.log(`${hero2.name} wins`);
        } else if (hero1.isAlive() && !hero2.isAlive()) {
            console.log(`${hero1.name} wins`);
        } else {
            console.log(`Le combat continue ! \n Il reste ${hero1.life} PV à ${hero1.name} et ${hero2.life} PV à ${hero2.name} .`);
        }
    } while (hero1.isAlive() && hero2.isAlive());
}


function createPlayer(name: string): Hero {

    const weaponLeon = Weapon.TYPE[Math.floor(Math.random() * Weapon.TYPE.length)];

    let player2;
    switch (weaponLeon) {
        case 'AXE':
            console.log(`${name} a choisie une Hache !`);
            return player2 = new HeroAxe(name, 10, 120);

        case 'SPEAR':
            console.log(`${name} a choisie une Lance !`);
            return player2 = new HeroSpear(name, 10, 120);

        case 'SWORD':
            console.log(`${name} a choisie une Epée !`);
            return player2 = new HeroSword(name, 10, 120);

        default:
            console.log(`${name} n'a pas choisi d'arme !`);
            player2 = new HeroSword(name, 10, 120);
            player2.weapon.name = 'FIST';
            return player2;
    }
}


let player = createPlayer('John');
let player2 = createPlayer('Leon');
combat(player, player2);