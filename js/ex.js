// 1. Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

let print = document.querySelector("#print")

function halfNumber(num) {

   print.textContent = `Half of ${num} is ${num/2}.`

   return num/2
}

halfNumber(9)


// 2. Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


function percentOf(num,num2) {

    print.textContent = `${num} is ${(num/num2)*100}% of ${num2}.`
    return (num/num2)*100
 }
 
 percentOf(10,5)


// 3. Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      EXTRA CHALLENGE: Round the result so there are only two digits after the decimal.


function areaOfCircle(num) {

    print.textContent = `The area for a circle with radius ${num} is ${(22/7)*num * num}`
    return (22/7)*num * num
 }
 
 areaOfCircle(5)


// 4. Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).


function allthree(num) {

    let half = halfNumber(num)
    let Square = half * half
    let aoc = areaOfCircle(num)
    let per = percentOf(Square,aoc)
     
    print.textContent =`Square : ${Square} is ${per}% of Area ${aoc}  `

}

allthree(20)
