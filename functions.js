/*Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9
*/


const check=prompt("enter a for c top f ,2 for f to c");
switch(check){
    case a:
        CToF()
        break;
    case b:
        FtoC()
        break;
    default:
        console.log("ented input is worng");
}

function CToF(){
    const degC=parseInt(prompt("enter the c"));
   var degF = (degC * 9/5) + 32
console.log(degF);
}
function FtoC(){
    const degF=parseInt(prompt("enter the F"));
   var degC = (degF - 32) * 5/9;
   console.log(degC);
}





/*
2. Write a function to check if the two numbers are Palindromes

*/
function palindrome (check) {
  
   
   const arrayValues = check.split('');

   const reverseArrayValues = arrayValues.reverse();

   const reverseString = reverseArrayValues.join('');

   if(string == reverseString) {
       console.log('It is a palindrome');
   }
   else {
       console.log('It is not a palindrome');
   }
  }


/*
3. Take a number from user and check if the number is a Prime then show

that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime */


var number = parseInt(prompt("enter the number"));

palindrome(number);
prime(number);



function isPrime(){
    
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
}

