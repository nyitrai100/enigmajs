export class Reflector {
  constructor(wiring) {
    this.wiring = wiring;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  //reflect the letter
  reflect(letter) {
    let index = this.alphabet.indexOf(letter);
    return this.wiring[index];
  }
}
