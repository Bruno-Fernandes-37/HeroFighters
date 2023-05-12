import Hero from './Hero';
import HeroSpear from './HeroSpear';
import Weapon from './Weapon';

export default class HeroSword extends Hero {

    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("SWORD");
    }

    public attack(opponent: Hero): void {
        if (opponent instanceof HeroSpear || opponent.weapon.name === "FIST") {
            opponent.life -= ((Math.floor(Math.random() * this.power)) + this.weapon.damage)*2;
        } else {
            opponent.life -= (Math.floor(Math.random() * this.power)) + this.weapon.damage;
        }
    }
}