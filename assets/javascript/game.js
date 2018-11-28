// set up the list of words
var wordList = ["vorlauf","sparge","grain","hops","yeast","water","gravity","wort","malt","stout",
                "porter","pale ale","fermentation","ale","amber","bung","brewpub","lauter","pitch","mash tun"];

// count how many words, console it
console.log("Words: " + wordList.length);

// select a random word from the wordList
var word = wordList[Math.floor(Math.random()*wordList.length)];

// console the word
console.log("Word: " + word);

// console the character length of the word
console.log("Word Length: " + word.length);