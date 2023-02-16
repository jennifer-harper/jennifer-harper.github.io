//Write a function that determines if any given string has all unique characters (i.e. no character in the string is duplicated). If the string has all unique characters, print “all unique”. If the string does not have all unique characters, print “duplicates found.”

let response = document.getElementById('response');
let responseUnique = document.getElementById('responseUnique');
let responseRepeat = document.getElementById('responseRepeat');


//For the enter button only call maths function when user is focusing on the userInput area, otherwise it will call the function when enter is pushed anywhere on the page
document.getElementById("userEnter").addEventListener("click", uniqueString);
document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      uniqueString();
    }
  });  



//   function uniqueString(){
    
//     let getString = document.getElementById("userInput").value;
//     let splitString = getString.toLowerCase().split('');
//     let answerString = [];

//     for (let i = 0; i < splitString.length; i++){
//         let currentChar = splitString[i];
//         if (splitString.indexOf(currentChar) === splitString.lastIndexOf(currentChar)){
//             answerString.push(currentChar);
//         }
//     }

//     if (answerString.length === 0) {
//         responseUnique.innerHTML = "No unique chars";
//     } else {
//         responseUnique.innerHTML = answerString.join(' ');
//     }
   
//     document.getElementById("userInput").value = "";
//     response.innerHTML = getString;     
    
// }

function uniqueString() {
    let getString = document.getElementById("userInput").value;
    let splitString = getString.toLowerCase().split('');
    let answerString = [];
    let charFreq = {};
  
    // Calculate the frequency of each character
    for (let i = 0; i < splitString.length; i++) {
      let currentChar = splitString[i];
      if (charFreq[currentChar]) {
        charFreq[currentChar]++;
      } else {
        charFreq[currentChar] = 1;
      }
    }
  
    // Add characters with a frequency of 1 to the answerString array
    for (let char in charFreq) {
      if (charFreq[char] === 1) {
        answerString.push(char);
      }
    }
  
    if (answerString.length === 0) {
      responseUnique.innerHTML = "No unique chars";
    } else {
      responseUnique.innerHTML = answerString.join(' ');
    }
  
    response.innerHTML = getString; 
  }
  