/*Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached..*/ 

var number=parseInt(prompt("enter the number"));
let check=1;
let power=0;

while(power<=256){
power=power*2;
console.log(power);
if(power ===number)
break;
power+1;
}


/*2. Find the Magic Number

a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached..

3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.
4. Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made. */