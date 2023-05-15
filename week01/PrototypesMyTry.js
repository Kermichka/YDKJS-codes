var symbolCharacters = ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"];
class reel {
    constructor() {
        this.symbols = [];
    }
    spin() {
        for (var i = 0; i < 3; i++) {
            var random = Math.floor(Math.random() * 8);
            this.symbols.push(symbolCharacters[random]);
        }
    }
    display() {
        var result = "";
        for (var i = 0; i < 3; i++) {
            result = result + " " + this.symbols[i] + " ";
            if (i < 2) {
                result = result + "|";
            }
        }
        return result;
    }
}
class slotMachine {
    constructor() {
        var a = new reel();
        var b = new reel();
        var c = new reel();
        this.reels = [a, b, c];

    }
    spin() {
        for (var i = 0; i < 3; i++) {
            this.reels[i].spin();
        }
    }
    display() {
        var res = "";
        for (var i = 0; i < 3; i++) {
            res = res + this.reels[i].display();
            if (i < 2) {
                res = res + "\n";
            }
        }
        console.log(res);
    }
}
var sM = new slotMachine();
sM.spin();
sM.display();