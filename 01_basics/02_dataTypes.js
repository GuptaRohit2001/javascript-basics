"use strict"; //treat all js code as newer version
//alert(3+3) This can be used in browser not in node

// console.log(3+3)

// let name="Rohit"
// let age=24
// let isLoggedIn=false

//number=> 2 to power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined
// symbol => unique

// console.log(typeof(age))
// console.log(typeof(null)) //object
// console.log(typeof(undefined))


// let score="33abc"

// let score1=null

// console.log(typeof score)
// console.log(typeof(score))
// let valueInNumber=Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)
// console.log(score1)
// let valueInNumber1=Number(score1)
// console.log(typeof(valueInNumber1))
// console.log(valueInNumber1)

// "33"=>33
// "33abc"=>NaN
// true=>1,false=>0
// let isLoggedIn=1
// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1=> true
//0=> false
// "hitesh"=> true
// ""=>false

// let someNumber=33
// let stringNumber=String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// let str1="rohit"
// let str2=" gupta"
// let str3=str1+str2
// console.log(str3)

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2")


//Primitive data types
//7 types String, Number, Boolean, null, undefined, symbol, BigInt

//Reference types (Non Primitive)
//Array, Objects, Functions
//JavaScript is a dynamically typed language

// const score=100
// const scoreValue=100.3

// const isLoggedIn=false
// const outsideTemp=null

// let userEmail;
// const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId)

// const bigNumber=4573012668423698742n


const heros = ["shaktiman","naagraj","doga"]

let obj={
  name: "hitesh",
  age: 22
}

const myFunc=function(){
  console.log("Hello World");
}
console.log(typeof(obj))
console.log(typeof heros)

console.log(typeof(anotherId))