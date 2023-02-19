//Write a function in your favorite programming language that will accept any two strings as parameters and return “1” if they are anagrams and “0” if they are not.

let answer = document.getElementById('answer');



//For the enter button only call maths function when user is focusing on the userInput area, otherwise it will call the function when enter is pushed anywhere on the page
document.getElementById("userEnter").addEventListener("click", getAnagram);
document.getElementById("userInputOne").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      getAnagram();
    }
});  


function getAnagram(){
    let userInputOne = document.getElementById('userInputOne').value.toLowerCase().split('')
    let userInputTwo = document.getElementById('userInputTwo').value.toLowerCase().split('')

    let storeAnswerOne = countChars(userInputOne)
    let storeAnswerTwo = countChars(userInputTwo)


    let answerOne = Object.keys(storeAnswerOne)
    let answerTwo = Object.keys(storeAnswerTwo)

    if (answerOne.length !== answerTwo.length) { 
        // Check if the two objects have the same number of properties
        // this just compares the chars, but not the count
        console.log('There are different characters')
        return
    } 



    let multiples = []

    for (let i = 0; i < answerOne.length; i++) {
        let key = answerOne[i];     
        //This checks whether the current key exists in storeAnswerTwo (i.e., !storeAnswerTwo[key])
        // OR whether the count of the current key in storeAnswerTwo is different from the count of the same key in storeAnswerOne 
        //(i.e., storeAnswerTwo[key] !== storeAnswerOne[key]).
        if (!storeAnswerTwo[key] || storeAnswerTwo[key] !== storeAnswerOne[key]) {
              multiples.push(key)
        }

        if ( multiples.length > 0) {
            answer.innerHTML = 'FALSE. The strings have different counts for the following characters: ' +  multiples.join(', ')
          } else {
            answer.innerHTML = 'TRUE. The strings are anagrams of each other!'
          }
    }
}
 

function countChars(string){
    let storeAnswer = {}
    let letters = /^[A-Za-z]+$/; // regular expression that matches only letters

    //go through the array and identify every char/letter
    for (let i = 0; i < string.length; i++){   
        //get the current letter     
        let currentChar = string[i]
        //is i (the current letter) already in the object? 
        //if not add it as one, if it is then ++ to the count
        if (currentChar.match(letters)){
            if (storeAnswer[currentChar]){
                storeAnswer[currentChar]++
            } else {
                storeAnswer[currentChar] = 1
            }
        }
    }  
    //return the object. 
    //The object has the chars as the keys and the count as the values.
    return storeAnswer
}

