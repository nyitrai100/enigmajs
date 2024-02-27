export class PlugBoard {
  constructor(mapping) {
    this.mapping = mapping || {};
  }
  //plug the letters
  plug(letter1, letter2) {
    if (!this.mapping[letter1] || this.mapping[letter2]) {
      this.mapping[letter1] = letter2;
      this.mapping[letter2] = letter1;
    }
  }
  unplug(letter, letter2) {
    delete this.mapping[letter];
    delete this.mapping[letter2];
  }
  getPlugs() {
    const plugs = {};
    const seenPairs = new Set();
    // Iterate over the plugboard mapping
    for (const [letter1, letter2] of Object.entries(this.mapping)) {
      const pair = [letter1, letter2].sort().join("");
      if (!seenPairs.has(pair)) {
        plugs[letter1] = letter2;
        seenPairs.add(pair);
      }
    }

    return plugs;
  }
  isPlugged(letter) {
    return this.mapping.hasOwnProperty(letter);
  }
  process(letter) {
    return this.mapping.hasOwnProperty(letter) ? this.mapping[letter] : letter;
  }
}
