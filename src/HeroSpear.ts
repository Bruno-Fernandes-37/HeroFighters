import Hero from './Hero';
import HeroAxe from './HeroAxe';
import Weapon from './Weapon';

export default class HeroSpear extends Hero {

    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("SPEAR");
    }

    public attack(opponent: Hero): void {
        if (opponent instanceof HeroAxe || opponent.weapon.name === "FIST") {
            opponent.life -= ((Math.floor(Math.random() * this.power)) + this.weapon.damage)*2;
        } else {
            opponent.life -= (Math.floor(Math.random() * this.power)) + this.weapon.damage;
        }
    }
}