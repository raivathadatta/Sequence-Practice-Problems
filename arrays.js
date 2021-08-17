/*1. Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
*/
let array=[];

for(var i=0;i<10;1++)
array.push(Math.floor(Math.random()*10));

let array1=array;
array.pop(Math.min.apply(array));
console.log(array.pop(Math.min.apply(array)));

array.pop(Math.max.apply(array))
console.log(array.pop(Math.max.apply(array)));
/*
2. Extend the above program to sort the array and then find the 2nd largest

and the 2nd smallest element.
*/

array1.sort();
console.log(array1[1]+"the smallest");
console.log(array1[array1.length-2]+"is the largest")
/*
3. Extend the Prime Factorization Program to store all the Prime Factors of a

number n into an array and finally display the output.*/


(function(){
    var primeArray=[];
    const number = parseInt(prompt("Enter a prange start from 1 "));
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
            primeArray.push(i);
        }
    }
    })();
    

/*

4. Write a Program to show Sum of three Integer adds to ZERO
*/
(function(){
    let sum;
var array=[10,20,-30];
for (let index = 0; index < array.length; index++) {
   sum=array[i]+sum;
    
}
if(sum==0)
console.log("true");
else
console.log("false");



});
/*
5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,

etc and store them in an array*/
var arrayPalindrome=[];
for(var i=1;i<100;i++){
  var check=  palindrome(i);
  if(check===true)
  arrayPalindrome.push(i);
}

for(var i=0;i<arrayPalindrome.length;i++)
console.log(arrayPalindrome[i]);

function palindrome (check) {
  
   
    const arrayValues = check.split('');
 
    const reverseArrayValues = arrayValues.reverse();
 
    const reverseString = reverseArrayValues.join('');
 
    if(string == reverseString) {
        return true;
    }
    else {
        return false;
    }
   }