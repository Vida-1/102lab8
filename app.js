//based on a demo provided by John Cokos

function getAnswer(){
    let answer = prompt("Tired of your same old same old day to day routine?");
    console.log(answer);
       if(answer.toLowerCase() !== "no"){
          document.write("Yes! Talk to a Code Fellows Admissions Advisor today!")
       } else {
              document.write ("It's good to hear things are going to so well for you!");
              }
}





// Notes from class today follow:

// function yourName() {

//         let name = prompt ("What is your name?");
//             document.write("Nice to meet you, " + name);
// } 


// function guessNumber() {
//         let answer;
//         let guesses = 0;

//         do {
//         guesses++;
//         answer=prompt("Guess a number between 1 and 10");
//         if (parseInt(answer) ===7) {
//                 document.write("It took you " +guesses + " times to guess my number")
//         } 

//         if (parseInt(answer) === 7)  {
//                 document.write ("It took yu " + guesses + " times to guess my number")
//         }

// }

// } 

