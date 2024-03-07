export class rotor {
  //set the wiring, notch and position of the rotor
  constructor(wiring, notch, position) {
    this.wiring = wiring;
    this.notch = notch;
    this.position = position;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  //rotate the rotor
  rotate() {
    this.position = (this.position + 1) % 26;
  }
  //check if the rotor is at the notch
  checkIfNextRotate() {
    if (this.position == this.notch) {
      return true;
    }
    return false;
  }
  getPosition() {
    return this.position;
  }
  setPosition(value) {
    this.position = value;
  }
  getNotch() {
    return this.notch;
  }
  setNotch(value) {
    this.notch = value;
    console.log(this.notch);
  }
  //encrypt the letter
  encrypt(letter, isInverse = false) {
    if (!isInverse) {
      let index = this.alphabet.indexOf(letter);
      index = (index + this.position) % 26;
      let newLetter = this.wiring[index];
      let newIndex = this.alphabet.indexOf(newLetter);
      newIndex = (newIndex - this.position + 26) % 26;
      return this.alphabet[newIndex];
    } else {
      let index = this.alphabet.indexOf(letter);
      index = (index + this.position) % 26;
      let newIndex = this.wiring.indexOf(this.alphabet[index]);
      let newLetter = this.alphabet[(newIndex - this.position + 26) % 26];
      return newLetter;
    }
  }
}
