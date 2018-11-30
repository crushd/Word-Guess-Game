// set up the list of words
var wordList = ["vorlauf","sparge","grain","hops","yeast","water","gravity","wort","malt",
                "porter","fermentation","ale","amber","bung","brewpub","lauter","pitch","mash tun"];

                // stout - double letters
                // pale ale

// count how many words, console it
//console.log("Words: " + wordList.length);

// select a random word from the wordList
var word = wordList[Math.floor(Math.random()*wordList.length)];

// console the word
//console.log("Word: " + word);

// console the character length of the word
//console.log("Word Length: " + word.length);

var answerArray = [];
var remainingLetters = word.length;
var maxTrys = 5;
var tryCounter = 0;

for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}


    $(document).on("keypress", function (e) {

        console.log(e.key);
        if (word.indexOf(e.key) < 0) {
            //console.log("Letter not found.");
            tryCounter++;
            
            // answerArray[word.indexOf(e.key)] = e.key;

            document.getElementById("game-start").innerHTML = answerArray.join(" ");
            document.getElementById("attempts-remaining").innerHTML = "Attempts remaining: " + (maxTrys - tryCounter);
            
            //console.log("Remaining: " + remainingLetters);
            if (tryCounter === maxTrys) {
                document.getElementById("result").innerHTML = "Sorry, Game Over";
            }

        } else {
            //console.log("Letter found!" + word.indexOf(e.key));
            answerArray[word.indexOf(e.key)] = e.key;
            document.getElementById("game-start").innerHTML = answerArray.join(" ");
            document.getElementById("attempts-remaining").innerHTML = "Attempts remaining: " + (maxTrys - tryCounter);
            remainingLetters--;

            //console.log("Remaining: " + remainingLetters);
            if (remainingLetters === 0) {
                document.getElementById("result").innerHTML = "You win!";
            }
        }
        console.log(answerArray);
        
    });



