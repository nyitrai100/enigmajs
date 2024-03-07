import { rotor } from "./rotor.mjs";
import { Reflector } from "./reflector.mjs";
import { PlugBoard } from "./plugboard.mjs";

export class Enigma {
  //set the rotors and reflector
  constructor() {
    this.rotorI = new rotor("EKMFLGDQVZNTOWYHXUSPAIBRCJ", 0, 0);
    this.rotorII = new rotor("AJDKSIRUXBLHWTMCQGZNPYFVOE", 0, 0);
    this.rotorIII = new rotor("BDFHJLCPRTXVZNYEIWGAKMUSQO", 0, 0);
    this.rotorIV = new rotor("ESOVPZJAYQUIRHXLNFTGKDCMWB", 0, 0);
    this.rotorV = new rotor("VZBRGITYUPSDNHLXAWMJQOFECK", 0, 0);

    this.rotors = [this.rotorI, this.rotorII, this.rotorIII, this.rotorIV, this.rotorV];
    this.selectedRotors = [2, 1, 0];

    this.reflectorA = new Reflector("EJMZALYXVBWFCRQUONTSPIKHGD");
    this.reflectorB = new Reflector("YRUHQSLDPXNGOKMIEBFZCWVJAT");
    this.reflectorC = new Reflector("FVPJIAOYEDRZXWGCTKUQSBNMHL");

    this.reflectors = [this.reflectorA, this.reflectorB, this.reflectorC];
    this.selectedReflector = 1;

    this.plugboard = new PlugBoard();
  }
  //encrypt the letter
  encryptLetter(letter) {
    letter = this.plugboard.process(letter);
    this.rotors[this.selectedRotors[0]].rotate();
    letter = this.rotors[this.selectedRotors[0]].encrypt(letter);
    var hasRotated = false;
    if (this.rotors[this.selectedRotors[0]].checkIfNextRotate()) {
      this.rotors[this.selectedRotors[1]].rotate();
      hasRotated = true;
    }
    letter = this.rotors[this.selectedRotors[1]].encrypt(letter);
    if (this.rotors[this.selectedRotors[1]].checkIfNextRotate() && hasRotated) {
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
