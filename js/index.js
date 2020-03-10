let jobTitle =`Web Developer`
let gLoc =`Toronto,Canada`
let aSal =`400k`


console.log(`You will be a ${jobTitle} in ${gLoc} making ${aSal} per year`)
let txt=document.querySelector('#ex1').textContent
console.log(txt)
txt=document.querySelector('#ex1').textContent=`You will be a ${jobTitle} in ${gLoc} making ${aSal} per year`

let ex1=document.querySelector('#ex1')

ex1.textContent+="Hi"


function setColor(){

    ex1.style.color="red"
}

setColor()


//Global scope
let name="Sunny"
let numTimesExecuted =0
function sayHello() {


    let name="Sunny" //Local
    console.log(`Hello ${name}`)
    name="Manpreet"
    numTimesExecuted=numTimesExecuted+1
    console.log(`Executed Times : ${numTimesExecuted}`)

}

let name1="Sunny"
let name2="Manpreet"

function sayHello2(name) {


    console.log(`Hello ${name}`)


}
sayHello2(name1)
sayHello2(name2)
sayHello2("Manu")

function multiply2numbers(num1,num2) {

console.log(`The multipication of ${num1} and ${num2} is ${num1 * num2}`)

return num1 * num2

}

let mul = multiply2numbers(4,5)
ex1.textContent+=mul


console.log(`The multipication of 10 and 5 is ${multiply2numbers(10,5)}`)