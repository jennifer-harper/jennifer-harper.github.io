let original = document.getElementById('original');
let reverseAnswer = document.getElementById('reverseAnswer');


//For the enter button only call maths function when user is focusing on the userInput area, otherwise it will call the function when enter is pushed anywhere on the page
document.getElementById("userEnter").addEventListener("click", getReverse);
document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      getReverse();
    }
});  

let storeString = []

function getReverse(){
    // Clear the previous result
    storeString = [];
    
    let userInput = document.getElementById("userInput").value.toLowerCase().split(' ');
    let keepOriginal = document.getElementById("userInput").value.toLowerCase()

    for (let i = userInput.length - 1; i >= 0; i--) {
        storeString.push(userInput[i])
    }

    let reversedSentence = storeString.join(' ');
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
    reverseAnswer.innerHTML = reversedSentence;

    original.innerHTML = keepOriginal.charAt(0).toUpperCase() + keepOriginal.slice(1);

    // Clear the input field
    document.getElementById("userInput").value = "";
}
