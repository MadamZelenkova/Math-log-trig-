export default class ExtraDamage {
  constructor() {
    this.baseAttack = 0;
    this.distance = 0;
    this._stoned = false;
  }

  setDistance(distance) {
    this.distance = distance;
  }

  calculateDamage() {
    return this.baseAttack * (1 - (this.distance - 1) * 0.1);
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    let modifier = this.calculateDamage();
    if (this._stoned) {
      return modifier -= Math.round(Math.log2(this.distance) * 5);
    }
    return modifier;
  }
}

export class Magician extends ExtraDamage {
  constructor() {
    super();
  }
}

export class Daemon extends ExtraDamage {
  constructor() {
    super();
  }
}
