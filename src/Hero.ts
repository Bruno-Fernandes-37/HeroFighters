import Weapon from "./Weapon"

export default abstract class Hero {

    private _name: string
    private _power: number
    private _life: number
    private _weapon: Weapon

    constructor(name: string, power: number, life: number) {
        this._name = name;
        this._power = power;
        this._life = life;
    }

    public get name() {
        return this._name;
    }

    public get power() {
        return this._power;
    }

    public set power(newPower) {
        this._power = newPower;
    }

    public get life() {
        return this._life;
    }

    public set life(newLife) {
        this._life = newLife;
    }

    public get weapon() {
        return this._weapon;
    }

    public set weapon(newWeapon) {
        this._weapon = newWeapon;
    }

    public attack(opponent: Hero): void {
        opponent.life -= this.power;
    }

    public isAlive(): boolean {
        return this.life > 0;
    }
}
