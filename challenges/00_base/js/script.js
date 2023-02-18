//For the enter button only call maths function when user is focusing on the userInput area, otherwise it will call the function when enter is pushed anywhere on the page
document.getElementById("userEnter").addEventListener("click", getReverse);
document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      getReverse();
    }
});  