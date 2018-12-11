// set up the list of words
var wordList = ["ale",
                "amber",
                "bitterness",
                "brewpub",
                "bung",
                "fermentation",
                "grain",
                "grist",
                "hops",
                "india pale ale",
                "lauter",
                "malt",
                "maltose",
                "mash",
                "mash tun",
                "pale ale",
                "pitch",
                "porter",
                "sparge",
                "specific gravity",
                "stout",
                "vorlauf",
                "wort",
                "yeast"];

// count how many words, console it
//console.log("Words: " + wordList.length);

// select a random word from the wordList
var word = wordList[Math.floor(Math.random()*wordList.length)];

// console the word
console.log("Word: " + word);

// console the character length of the word
//console.log("Word Length: " + word.length);

// list of correct guesses
var answerArray = [];

// list of wrong guesses
var wrongArray = [];

// characters that remain to be guessed
var remainingLetters = word.length;

// total guesses allowed
var maxTrys = 6;

// how many times has the user guessed
var tryCounter = 0;

// keep track of wins
var gameWins = 0;


// loop through each character of the word to create the missing letter underlines
for (i = 0; i < word.length; i++) {

    // if the word has a space
    if (word[i] == " ") {
        // add html space instead of an underline
        answerArray[i] = "&nbsp;";
        // remove the space as a potential guess from the word
        remainingLetters--;
    } else {
        // otherwise just put an underline in place of each character
        answerArray[i] = "_";
    }
}

$(document).ready(function() {

    $(document).on("keypress", function (e) {

        // this is the key the user pressed
        console.log("Key pressed: " + e.key.toLowerCase());
        
        // if the character isn't found in the word        
        if (word.indexOf(e.key.toLowerCase()) < 0) {
            //console.log("Letter not found.");

            // if this character isn't already in the wrongArray
            if (wrongArray.indexOf(e.key.toLowerCase()) < 0) {
                // put the character in the wrong array
                wrongArray.push(e.key);

                // increase the userattempts
                tryCounter++;
            }

            document.getElementById("game-start").innerHTML = answerArray.join(" ");
            document.getElementById("attempts-remaining").innerHTML = "Attempts remaining: " + (maxTrys - tryCounter);
            document.getElementById("wrongList").innerHTML = wrongArray.join(" ");
            

            console.log("Remaining: " + remainingLetters);
            if (tryCounter >= maxTrys) {
                document.getElementById("lose").innerHTML = "Sorry, Game Over";
            }

        } else {
            //console.log("Letter found!" + word.indexOf(e.key));
            console.log("remaining: " + remainingLetters);            
            
            for (var j=0 ; j < word.length ; j++) {
                
                element = word.charAt(j);

                if (e.key.toLowerCase() === element) {
                    
                    answerArray[j] = e.key.toLowerCase();
                    console.log("answer index: " + answerArray.indexOf(e.key.toLowerCase()));
                    remainingLetters--;
                }
            }
                    
            document.getElementById("game-start").innerHTML = answerArray.join(" ");
            document.getElementById("attempts-remaining").innerHTML = "Attempts remaining: " + (maxTrys - tryCounter);
            document.getElementById("wrongList").innerHTML = wrongArray.join(" ");

            // if remainingLetters reaches zero
            if (remainingLetters <= 0) {
                // then the user wins
                document.getElementById("win").innerHTML = "Congratulations, you win!";
                
                // add to the win counter
                gameWins++;

                //update the win counter on the page
                //document.getElementById("gameWins").innerHTML = "Wins: " + gameWins;

                // display a definition of the word guessed.
                if (word === "ale") {
                    document.getElementById("description-text").innerHTML = "A type of beer with a bitter flavor and higher alcoholic content.";
                
                } else if (word === "amber") {
                        document.getElementById("description-text").innerHTML = "Amber ale is an emerging term used in Australia, France and North America for pale ales brewed with a proportion of amber malt and sometimes crystal malt to produce an amber colour generally ranging from light copper to light brown.";
                
                } else if (word === "bitterness") {
                        document.getElementById("description-text").innerHTML = "The perception of a bitter flavor, in beer from iso-alpha-acid in solution (derived from hops). It is measured in International Bitterness Units (IBU).";

                } else if (word === "brewpub") {
                    document.getElementById("description-text").innerHTML = "Pub that makes its own beer and sells at least 50% of it on premises. Also known in Britain as a home-brew house and in Germany as a house brewery.";

                } else if (word === "bung") {
                    document.getElementById("description-text").innerHTML = "The stopper in the hole in a keg or cask through which the keg or cask is filled and emptied. The hole may also be referred to as a bung or bunghole. Technically, real beer must use a wooden bung.";

                } else if (word === "fermentation") {
                    document.getElementById("description-text").innerHTML = "Conversion of sugars into ethyl alcohol and carbon dioxide, through the action of yeast.";

                } else if (word === "grain") {
                    document.getElementById("description-text").innerHTML = "Crushed, malted grains are soaked in hot water to convert starches into sugar. This results is a sugary liquid called wort.";

                } else if (word === "grist") {
                    document.getElementById("description-text").innerHTML = "Brewers' term for milled grains, or the combination of milled grains to be used in a particular brew. Derives from the verb to grind. Also sometimes applied to hops.";
                    
                } else if (word === "hops") {
                    document.getElementById("description-text").innerHTML = "Herb added to boiling wort or fermenting beer to impart a bitter aroma and flavor.";
                    
                } else if (word === "india pale ale") {
                    document.getElementById("description-text").innerHTML = "India pale ale is a hoppy beer style within the broader category of pale ale. The term 'pale ale' originally denoted an ale brewed from pale malt. Among the first brewers known to export beer to India was George Hodgson's Bow Brewery, on the Middlesex-Essex border.";

                } else if (word === "lauter") {
                    document.getElementById("description-text").innerHTML = "To run the wort from the mash tun. From the German word to clarify. A lauter tun is a separate vessel to do this job. It uses a system of sharp rakes to achieve a very intensive extraction of malt sugars.";

                } else if (word === "malt") {
                    document.getElementById("description-text").innerHTML = "Barley or other grain that has been steeped, germinated, and dried, used especially for brewing or distilling and vinegar-making.";

                } else if (word === "maltose") {
                    document.getElementById("description-text").innerHTML = "A sugar produced by the breakdown of starch, e.g., by enzymes found in malt and saliva. It is a disaccharide consisting of two linked glucose units.";

                } else if (word === "mash") {
                    document.getElementById("description-text").innerHTML = "(Verb) To release malt sugars by soaking the grains in water. (Noun) The resultant mixture.";

                } else if (word === "mash tun") {
                    document.getElementById("description-text").innerHTML = "A tank where grist is soaked in water and heated in order to convert the starch to sugar and extract the sugars and other solubles from the grist.";

                } else if (word === "pale ale") {
                    document.getElementById("description-text").innerHTML = "Pale ale is an ale made with predominantly pale malt. The highest proportion of pale malts results in a lighter colour. The term 'pale ale' first appeared around 1703 for beers made from malts dried with coke, which resulted in a lighter colour than other beers popular at that time.";

                } else if (word === "pitch") {
                    document.getElementById("description-text").innerHTML = "To add yeast to wort.";

                } else if (word === "porter") {
                    document.getElementById("description-text").innerHTML = "Dark brown bitter beer brewed from malt partly charred or browned by drying at a high temperature.";

                } else if (word === "sparge") {
                    document.getElementById("description-text").innerHTML = "To spray grist with hot water in order to remove soluble sugars (maltose). This takes place at the end of the mash.";
                    
                } else if (word === "specific gravity") {
                    document.getElementById("description-text").innerHTML = "A measure of the density of a liquid or solid compared to that of water ((1.000 at 39°F (4°C)).";
                    
                } else if (word === "stout") {
                    document.getElementById("description-text").innerHTML = "Stout is a dark beer. There are a number of variations including Baltic porter, milk stout, and imperial stout; the most common variation is dry stout, exemplified by Guinness Draught, the world's best selling stout. Stout is a top-fermented beer.";

                } else if (word === "vorlauf") {
                    document.getElementById("description-text").innerHTML = "Vorlauf is derived from the German verb vorlaufen which means to 'run ahead'. In brewing this is when you initially run off wort from your lauter tun into a vessel called a grant. You then keep recirculating the runnings from the grant back on top of the grain bed until the wort begins to run clear.";
                   
                } else if (word === "wort") {
                    document.getElementById("description-text").innerHTML = "The solution of grain sugars strained from the mash tun. At this stage, regarded as 'sweet wort', later as brewed wort, fermenting wort and finally beer."; 

                } else if (word === "yeast") {
                    document.getElementById("description-text").innerHTML = "A micro-organism of the fungus family. Genus Saccharomyces. Yeast is responsible for converting sugars into alcohol.";

                } else {
                    document.getElementById("description-text").innerHTML = "Some words about the word.";
                }

                    $('#attempts-remaining').css('visibility', 'hidden');
                    $('#wrongList').css('visibility', 'hidden');
                    $('#description').css('visibility', 'visible');
               
                
            }
            
        }

        // console.log(answerArray);
        
    });


});

