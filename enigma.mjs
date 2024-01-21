import { Rotor } from "./rotar.mjs";
import { Reflector } from "./reflector.mjs";
import { PlugBoard } from "./plugboard.mjs";

export class Enigma {
  constructor() {
    this.rotorI = new Rotor([4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15, 0, 8, 1, 17, 2, 9], 16, 15);
    this.rotorII = new Rotor([23, 3, 14, 8, 22, 5, 10, 19, 11, 0, 13, 6, 24, 20, 7, 1, 18, 21, 9, 2, 4, 15, 16, 25, 12, 17], 20, 7);
    this.rotorIII = new Rotor([19, 3, 12, 8, 24, 6, 14, 1, 17, 21, 13, 10, 9, 20, 7, 0, 15, 22, 16, 23, 2, 4, 11, 18, 5, 25], 8, 2);

    this.reflector = new Reflector([24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2, 22, 21, 9, 0, 19]);

    this.plugboard = new PlugBoard();
  }

  encryptLetter(letter) {
    this.rotorI.rotate();
    letter = this.rotorI.encrypt(letter);
    if (this.rotorI.checkIfNextRotate()) {
      this.rotorII.rotate();
    }
    letter = this.rotorII.encrypt(letter);
    if (this.rotorII.checkIfNextRotate()) {
      this.rotorIII.rotate();
    }
    letter = this.rotorIII.encrypt(letter);
    letter = this.reflector.reflect(letter);
    letter = this.rotorIII.encrypt(letter, true);
    letter = this.rotorII.encrypt(letter, true);
    letter = this.rotorI.encrypt(letter, true);
    letter = this.plugboard.process(letter);
    return letter;
  }
}
