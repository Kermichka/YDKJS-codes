const word = "katarinamain"
let charList = {};
for (let i = 0; i < word.length; i++) {
    const char = word.substring(i, i + 1);
    if (!charList.hasOwnProperty(char)) {
        charList[char] = 1
    }
    else {
        charList[char]++;
    }
}
console.log(charList);

const charArray = Object.entries(charList);
charArray.sort();
charArray.sort((a, b) =>  b[1] - a[1]);
charList = Object.fromEntries(charArray);
console.log(charList);