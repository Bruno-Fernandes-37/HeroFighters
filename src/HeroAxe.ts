import Hero from './Hero';
import HeroSword from './HeroSword';
import Weapon from './Weapon';

export default class HeroAxe extends Hero {

    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("AXE");
    }

    public attack(opponent: Hero): void {
        if (opponent instanceof HeroSword || opponent.weapon.name === "FIST") {
            opponent.life -= ((Math.floor(Math.random() * this.power)) + this.weapon.damage)*2;
        } else {
            opponent.life -= (Math.floor(Math.random() * this.power)) + this.weapon.damage;
        }
    }
}