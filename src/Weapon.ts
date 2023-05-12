export default class Weapon {

    static TYPE: string[] = ["AXE", 'SWORD', 'SPEAR'];

    private _name: string
    private _damage: number

    constructor(name: string) {

        if (!Weapon.TYPE.includes(name)) {
            this._name = 'FIST';
            this._damage = 0;
        } else {
            this._name = name;
            this._damage = 10;
        }
    }

    public get name() {
        return this._name;
    }

    public set name(newName) {
        if (!Weapon.TYPE.includes(newName)) {
            this._name = 'FIST';
            this._damage = 0;
        } else {
            this._name = newName;
            this._damage = 10;
        } 
    }

    public get damage() {
        return this._damage;
    }

}