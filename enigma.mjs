import { rotor } from "./rotor.mjs";
import { Reflector } from "./reflector.mjs";
import { PlugBoard } from "./plugboard.mjs";

export class Enigma {
  //set the rotors and reflector
  constructor() {
    this.rotorI = new rotor([4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15, 0, 8, 1, 17, 2, 9], 16, 15);
    this.rotorII = new rotor([0, 9, 3, 10, 18, 8, 17, 20, 23, 1, 11, 7, 22, 19, 12, 2, 16, 6, 25, 13, 15, 24, 5, 21, 14, 4], 20, 7);
    this.rotorIII = new rotor([1, 3, 5, 7, 9, 11, 2, 15, 17, 19, 23, 21, 25, 13, 24, 4, 8, 22, 6, 0, 10, 12, 20, 18, 16, 14], 8, 2);
    this.rotorIV = new rotor([4, 18, 14, 21, 15, 25, 9, 0, 24, 16, 20, 8, 17, 7, 23, 11, 13, 5, 19, 6, 10, 3, 2, 12, 22, 1], 7, 8);
    this.rotorV = new rotor([21, 25, 1, 17, 6, 8, 19, 24, 20, 15, 18, 3, 13, 7, 11, 23, 0, 22, 12, 9, 16, 14, 5, 4, 2, 10], 10, 5);

    this.rotors = [this.rotorI, this.rotorII, this.rotorIII, this.rotorIV, this.rotorV];
    this.selectedRotors = [0, 1, 2];

    this.reflectorA = new Reflector([4, 9, 12, 25, 0, 11, 24, 23, 21, 1, 22, 5, 2, 17, 16, 20, 14, 13, 19, 18, 15, 8, 10, 7, 6, 3]);
    this.reflectorB = new Reflector([24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2, 22, 21, 9, 0, 19]);
    this.reflectorC = new Reflector([5, 21, 15, 9, 8, 0, 14, 24, 4, 3, 17, 25, 23, 22, 6, 2, 19, 10, 20, 16, 18, 1, 13, 12, 7, 11]);

    this.reflectors = [this.reflectorA, this.reflectorB, this.reflectorC];
    this.selectedReflector = 0;

    this.plugboard = new PlugBoard();
  }
  //encrypt the letter
  encryptLetter(letter) {
    letter = this.plugboard.process(letter);
    this.rotors[this.selectedRotors[0]].rotate();
    letter = this.rotors[this.selectedRotors[0]].encrypt(letter);
    if (this.rotors[this.selectedRotors[0]].checkIfNextRotate()) {
      this.rotors[this.selectedRotors[1]].rotate();
    }
    letter = this.rotors[this.selectedRotors[1]].encrypt(letter);
    if (this.rotors[this.selectedRotors[1]].checkIfNextRotate()) {
      this.rotors[this.selectedRotors[2]].rotate();
    }
    letter = this.rotors[this.selectedRotors[2]].encrypt(letter);
    letter = this.reflectors[this.selectedReflector].reflect(letter);
    letter = this.rotors[this.selectedRotors[2]].encrypt(letter, true);
    letter = this.rotors[this.selectedRotors[1]].encrypt(letter, true);
    letter = this.rotors[this.selectedRotors[0]].encrypt(letter, true);
    letter = this.plugboard.process(letter);
    return letter;
  }
  getSelectedRotors() {
    return this.selectedRotors;
  }
  setSelectedRotors(index, rotor) {
    this.selectedRotors[index] = rotor;
  }
  getRotors() {
    return this.rotors;
  }
  getPlugboard() {
    return this.plugboard;
  }
  getSelectedReflector() {
    return this.selectedReflector;
  }
  setSelectedRotors(reflector) {
    this.selectedReflector = Number(reflector);
  }
}
