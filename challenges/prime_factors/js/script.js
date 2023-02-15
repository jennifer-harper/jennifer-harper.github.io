let response = document.getElementById('response');
let responsePrime = document.getElementById('responsePrime');
let isPrime = true;


//For the enter button only call maths function when user is focusing on the userInput area, otherwise it will call the function when enter is pushed anywhere on the page
document.getElementById("userEnter").addEventListener("click", maths);
document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      maths();
    }
  });  


function maths() {
    let number = document.getElementById("userInput").value;
  
    if (number === "") {
      response.innerHTML = "";
      responsePrime.innerHTML = "";
      return;
    }
  
    isPrime = true;

    let factors = getFactors(number);
    let primeFactors = getPrimeFactors(number);
  
    if (isPrime) {
      response.innerHTML = number + ' is a prime number. '
    } else {
      response.innerHTML = number + ' is a composite number. ' + number + ' is divisible by ' + factors.join(", ")
    }
  
    responsePrime.innerHTML = "The prime factors of " + number + " are " + primeFactors.join(", ");
  
    //weed out all the cheaters
    if (number % 1 !== 0){
        response.innerHTML = "Please enter a whole number";
        responsePrime.innerHTML = "";
    }
    
    if (number == 1) {
        response.innerHTML = "1 is neither prime nor composite number.";
        responsePrime.innerHTML = "";
    }

    if (number < 1) {
        response.innerHTML = "Please enter a positive number.";
        responsePrime.innerHTML = "";
    }
  }


  function getFactors(number){
    let factors = []
    for (let j = 2; j < number; j++) {
        //this uses an if loop. If the number is divisible by j (any number greater/equal to 2 but less than itself), add that j to the factors array
        if (number % j == 0) {
            factors.push(j)
            isPrime = false
        } 
    }
    return factors
}


function getPrimeFactors(number) {
  let primeFactors = [];
  for (let i = 2; i <= number; i++) { 
    //This is the same as getFactors but it includes itself as a 'i' option. Prime numbers are only divisible by themselves and equals 1, so loop stops. 
    while (number % i == 0) {
      primeFactors.push(i);
      //reduce the value of number each time a prime factor is found.
      number = number / i;
    }
  }
  return primeFactors;
}



