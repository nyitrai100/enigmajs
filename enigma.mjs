import { Rotor } from "./rotar.mjs";
import { Reflector } from "./reflector.mjs";
import { PlugBoard } from "./plugboard.mjs";

export class Enigma {
  //set the rotors and reflector
  constructor() {
    this.rotorI = new Rotor([4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15, 0, 8, 1, 17, 2, 9], 16, 15);
    this.rotorII = new Rotor([23, 3, 14, 8, 22, 5, 10, 19, 11, 0, 13, 6, 24, 20, 7, 1, 18, 21, 9, 2, 4, 15, 16, 25, 12, 17], 20, 7);
    this.rotorIII = new Rotor([19, 3, 12, 8, 24, 6, 14, 1, 17, 21, 13, 10, 9, 20, 7, 0, 15, 22, 16, 23, 2, 4, 11, 18, 5, 25], 8, 2);
    this.rotorIV = new Rotor([25, 14, 20, 4, 18, 24, 3, 10, 5, 22, 15, 2, 8, 16, 23, 7, 12, 21, 1, 11, 6, 13, 9, 17, 0, 19], 7, 8);
    this.rotorV = new Rotor([22, 26, 9, 10, 12, 13, 14, 24, 6, 25, 11, 23, 7, 8, 15, 16, 17, 18, 19, 20, 21, 1, 2, 3, 4, 5], 10, 5);
    this.reflector = new Reflector([24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2, 22, 21, 9, 0, 19]);
    this.plugboard = new PlugBoard();

    this.rotors = [this.rotorI, this.rotorII, this.rotorIII, this.rotorIV, this.rotorV];
    this.selectedRotars = [0, 1, 2];
  }
  //encrypt the letter
  encryptLetter(letter) {
    letter = this.plugboard.process(letter);
    this.rotors[this.selectedRotars[0]].rotate();
    letter = this.rotors[this.selectedRotars[0]].encrypt(letter);
    if (this.rotors[this.selectedRotars[0]].checkIfNextRotate()) {
      this.rotors[this.selectedRotars[1]].rotate();
    }
    letter = this.rotors[this.selectedRotars[1]].encrypt(letter);
    if (this.rotors[this.selectedRotars[1]].checkIfNextRotate()) {
      this.rotors[this.selectedRotars[2]].rotate();
    }
    letter = this.rotors[this.selectedRotars[2]].encrypt(letter);
    letter = this.reflector.reflect(letter);
    letter = this.rotors[this.selectedRotars[2]].encrypt(letter, true);
    letter = this.rotors[this.selectedRotars[1]].encrypt(letter, true);
    letter = this.rotors[this.selectedRotars[0]].encrypt(letter, true);
    letter = this.plugboard.process(letter);
    return letter;
  }
  getSelectedRotars() {
    return this.selectedRotars;
  }
  setSelectedRotars(index, rotar) {
    this.selectedRotars[index] = rotar;
  }
  getRotars() {
    return this.rotors;
  }
  getPlugboard() {
    return this.plugboard;
  }
}
