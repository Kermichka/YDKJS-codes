const symbolCharacters = ['♠', '♥', '♦', '♣', '☺', '★', '☾', '☀'];
class reel {
  constructor () {
    this.symbols = [];
  }

  spin () {
    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * 8);
      this.symbols.push(symbolCharacters[random]);
    }
  }

  display () {
    let result = '';
    for (let i = 0; i < 3; i++) {
      result = result + ' ' + this.symbols[i] + ' ';
      if (i < 2) {
        result = result + '|';
      }
    }
    return result;
  }
}
class slotMachine {
  constructor () {
    const a = new reel();
    const b = new reel();
    const c = new reel();
    this.reels = [a, b, c];
  }

  spin () {
    for (let i = 0; i < 3; i++) {
      this.reels[i].spin();
    }
  }

  display () {
    let res = '';
    for (let i = 0; i < 3; i++) {
      res = res + this.reels[i].display();
      if (i < 2) {
        res = res + '\n';
      }
    }
    console.log(res);
  }
}
const sM = new slotMachine();
sM.spin();
sM.display();
