/*Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times*/

var die =Math.floor(Math.random()*6 + 1);
let myMap =new Map()
var check=true;


while(check){
    var die =Math.floor(Math.random()*6 + 1);
    if(myMap.has(die)){
       var sett= parseInt( myMap.get(die));
       
       sett++;
       myMap.set(die,sett)
       if(parseInt(myMap.get(die))==10){
        check=false;
           break;
          
       }
    }
    else
    myMap.set(die,1);
  
}




/*

2. Write a Program to generate a birth month of 50 individuals

between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print. */