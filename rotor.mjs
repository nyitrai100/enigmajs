export class rotor {
  //set the wiring, notch and position of the rotor
  constructor(wiring, notch, position) {
    this.wiring = wiring;
    this.notch = notch;
    this.position = position;
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
    const inputIndex = letter.charCodeAt(0) - "A".charCodeAt(0);

    // Adjust for rotor position in the original direction
    const adjustedIndex = (inputIndex - this.position + 26) % 26;

    // Get the output index
    const outputIndex = isInverse ? this.wiring.indexOf(adjustedIndex) : this.wiring[adjustedIndex];

    // Adjust for rotor position in the inverse direction
    const encryptedChar = String.fromCharCode(((outputIndex + this.position) % 26) + "A".charCodeAt(0));
    return encryptedChar;
  }
}
