$(document).ready(function randomNum() {
            
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //array of lowercased alphabet
    var letter = letters[Math.floor(Math.random() * letters.length)];
    //creates a variable that chooses a random element from the letters array
    console.log(letter);
       //logs the random letter to the console

    var guessesLeft=10;
       var wins=0;
       var losses=0;
       //initally sets guesscounting variable, wins and losses at 0
    document.onkeypress = function yuh() {
      //"when a key is pressed on the document"
       guessesLeft--;
       //increments your guesses left down with every guess(keypress)
       console.log(guessesLeft);
       //logs your guesses left to the console
       document.getElementById("guesses").innerHTML=guessesLeft;
       //gets the guesses element from html and inserts the new amount of guesses you have left
       var guessedLetter = event.key;
       //sets variable equal to keypress to track what key
       console.log(guessedLetter);
        //logs aformentioned key
           
       
       if (guessesLeft>0) {
           //if you have more than 0 guesses left, do this:
           document.getElementById("guessSoFar").innerHTML=guessedLetter;
           //get the guessSoFar element from html and put a guessed letter there
           //*****I SPENT A WHILE TRYING TO APPEND GUESSES BUT COULDN'T LIST ALL GUESSES, I FAILED GOOGLE*****/
       
       }
           if  (guessedLetter===letter) {
               //if your guessed letter matches the randomly pulled computer letter do this:
               wins++;
               //increment wins by 1
               console.log(wins);
               //log new number of wins to the console
               document.getElementById("winNumber").innerHTML=wins;
               //grab the element with id win from html and put newly incremented wins in whatever was previously there
               document.getElementById("guessSoFar").innerHTML="";
               //resets guessSoFar element
               guessesLeft=10;
               //resets guesses back to 10 
               randomNum();
                //reloads document with newly incremented wins
           }
    
       if (guessesLeft===0) {
           losses++;
           console.log(losses);
           document.getElementById("lossNumber").innerHTML=losses;
           alert("You Lose!");
           guessesLeft=10;
       }
       
    }
  
       
       
   });
   

 
   
