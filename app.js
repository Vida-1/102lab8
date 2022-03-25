//based on a demo provided by John Cokos

function getAnswer(){
    let answer = prompt("Tired of your same old same old day to day routine?");
    console.log(answer);
    return: answer;
    }
       if(answer.toLowerCase() !== "no"){
          document.write("Yes! Talk to a Code Fellows Admissions Advisor today!")
       } else {
              document.write ("It's good to hear things are going to so well for you!");
              }
}

// this code was written by John Cokos and is run here as a demonstration, not a representation of my own work

function guessNumber() {
        let answer;
        let guesses = 0;

        do {
        guesses++;
        answer=prompt("Guess a number between 1 and 10");
        if (parseInt(answer) ===7) {
                document.write("It took you " +guesses + " times to guess my number")
        } 

        if (parseInt(answer) === 7)  {
                document.write ("It took you " + guesses + " times to guess my number")
        }

}

} 

