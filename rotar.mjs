export class Rotor {
  constructor(wiring, notch, position) {
    this.wiring = wiring;
    this.notch = notch;
    this.position = position;
  }

  //   setStartingPosition(position) {
  //     this.position = this.position % 26;
  //   }

  rotate() {
    this.position = (this.position + 1) % 26;
  }
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
  encrypt(letter, isInverse = false) {
    const inputIndex = letter.charCodeAt(0) - "A".charCodeAt(0);

    // Adjust for rotor position in the reverse direction
    const adjustedIndex = (inputIndex - this.position + 26) % 26;

    // Perform inverse encryption
    const outputIndex = isInverse ? this.wiring.indexOf(adjustedIndex) : this.wiring[adjustedIndex];

    // Adjust for rotor position in the original direction
    const encryptedChar = String.fromCharCode(((outputIndex + this.position) % 26) + "A".charCodeAt(0));
    return encryptedChar;
  }
}
