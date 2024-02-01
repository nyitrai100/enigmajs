export class PlugBoard {
  constructor(mapping) {
    this.mapping = mapping || {};
  }

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

    for (const [letter1, letter2] of Object.entries(this.mapping)) {
      const pair = [letter1, letter2].sort().join(""); // Sort the letters and join them
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
    // Check if the letter is plugged, if not, return the original letter
    return this.mapping.hasOwnProperty(letter) ? this.mapping[letter] : letter;
  }
}
