//based on a demo provided by John Cokos

function getAnswer(){
        let answer = prompt("Tired of your same old same old day to day routine?");
        if(answer.toLowerCase() !== "no"){
          document.write("Yes! Talk to a Code Fellows Admissions Advisor today!")
       } else {
              document.write ("It's good to hear things are going so well for you!");
              } return: answer;
}

// this code was written by John Cokos and is run here as a demonstration, not a representation of my own work

function guessNumber() {
        let guesses = 0;

    do {
        let guess=prompt("Guess a number between 1 and 10");   
        guesses++;
        if (parseInt(guess) ===7) {
                document.write("It took you " +guesses + " times to guess my number");
        } 
        } 

