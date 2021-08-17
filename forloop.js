/*Write a program that takes a command-line argument n and prints a table of the

powers of 2 that are less than or equal to 2^n.*/
var power =prompt("enter the number");
var result=1;
for(i=0;i<n;i++){
    result=result*2;
    console.log(result);
}




/*

2. Write a program that takes a command-line argument n and prints the nth harmonic

number. Harmonic Number is of the form*/

var harmonic=parseInt(prompt("enter the number"));
var harmonicSum=0;
for(i=1;i<=harmonic;i++){
    harmonicSum=harmonic+(1/i);
    console.log(harmonicSum)
}


/*

3. Write a program that takes a input and determines if the number is a prime.
*/

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



/*

4. Extend the program to take a range of number as input and output the Prime

Numbers in that range.
*/







const number = parseInt(prompt("Enter a positive number range "));



// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    for (let index = 0; index < number; index++) {
        let isPrime = true;
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log(`${number} is a prime number`);
        } 
        
    }
    
}



/*
5. Write a program that computes a factorial of a number taken as input.

5 Factorial – 5! = 1 * 2 * 3 * 4 * 5*/


let number =parseInt(prompt("enter the number"));
let factorial =1;
for(var i=1;i<=number;i++)
factorial=factorial*i;

console.log(factorial);

/*

6. Write a program to compute Factors of a number N using prime factorization method.

Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N. */



let n = parseInt(prompt("enter the number"));

while (n % 2 == 0)
{
    document.write(2 + " ");
    n = Math.floor(n / 2);
}


for(let i = 3;
        i <= Math.floor(Math.sqrt(n));
        i = i + 2)
{
     
    
    while (n % i == 0)
    {
        console.log(i + " ");
        n = Math.floor(n / i);
    }
}


if (n > 2)
   console.log(n + " ");



