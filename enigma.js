class Rotor {
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
  class Reflector {
    constructor(wiring) {
      this.wiring = wiring;
    }
  
    reflect(letter) {
      const inputIndex = letter.charCodeAt(0) - "A".charCodeAt(0);
      const reflectedIndex = this.wiring[inputIndex];
      const reflectedChar = String.fromCharCode(reflectedIndex + "A".charCodeAt(0));
      return reflectedChar;
    }
  }
  class PlugBoard {
    constructor(mapping) {
      this.mapping = mapping || {};
    }
  
    plug(letter1, letter2) {
      this.mapping[letter1] = letter2;
      this.mapping[letter2] = letter1;
    }
    process(letter) {
      // Check if the letter is plugged, if not, return the original letter
      return this.mapping.hasOwnProperty(letter) ? this.mapping[letter] : letter;
    }
  }
  const plugboard = new PlugBoard();
  const rotorI = new Rotor([4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15, 0, 8, 1, 17, 2, 9], 16, 5);
  const rotorII = new Rotor([23, 3, 14, 8, 22, 5, 10, 19, 11, 0, 13, 6, 24, 20, 7, 1, 18, 21, 9, 2, 4, 15, 16, 25, 12, 17], 20, 7);
  const rotorIII = new Rotor([19, 3, 12, 8, 24, 6, 14, 1, 17, 21, 13, 10, 9, 20, 7, 0, 15, 22, 16, 23, 2, 4, 11, 18, 5, 25], 8, 2);
  const reflectorB = new Reflector([24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2, 22, 21, 9, 0, 19]);
  
  plugboard.plug("A", "Q");
  plugboard.plug("B", "X");
  // Encryption
  var letter = "R";
  letter = plugboard.process(letter);
  console.log(letter);
  letter = rotorI.encrypt(letter);
  letter = rotorII.encrypt(letter);
  letter = rotorIII.encrypt(letter);
  letter = reflectorB.reflect(letter);
  letter = rotorIII.encrypt(letter, true);
  letter = rotorII.encrypt(letter, true);
  letter = rotorI.encrypt(letter, true);
  letter = plugboard.process(letter);
  
  console.log(letter);


 