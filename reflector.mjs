export class Reflector {
  constructor(wiring) {
    this.wiring = wiring;
  }
  //reflect the letter
  reflect(letter) {
    const inputIndex = letter.charCodeAt(0) - "A".charCodeAt(0);
    const reflectedIndex = this.wiring[inputIndex];
    const reflectedChar = String.fromCharCode(reflectedIndex + "A".charCodeAt(0));
    return reflectedChar;
  }
}
