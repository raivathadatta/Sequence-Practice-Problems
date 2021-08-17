console.log("hello");
var a =prompt("enter the number a ");
var b=prompt("enter the number b");
var c= prompt("enter teh number c");
if(a>b)
{
    if(a>c)
    alert(a+" is max");
    else{
        alert( c+"is max");
    }
}
else{
    if(b>c)
    alert(b+"is max");
    else
    alert(c+"is max");
}
/*/*Write a program that takes day and month from the command line and prints true if

day of month is between March 20 and June 20, false otherwise. */
var month =prompt("enter the month 1to 12");
var date =prompt("enter the day 1to  31");
var cluclate=month*date;
/*

4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly. */
if(caluclate>=120 && clauclate <=1200)
{
    console.log("true");
}
else
console.log("false");

/*
3. Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400.*/
var year =prompt("enter the year");
console.log((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0));
/*Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly. */
var conin=Math.floor(Math.random()*2+1)
if(coin==1){
    console.log("Head");
}
else
console.log("tail");