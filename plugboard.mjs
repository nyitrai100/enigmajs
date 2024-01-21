export class PlugBoard {
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
